import {Injectable} from '@angular/core';
import {AsyncSubject, Observable, Subject} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ContextService} from "./context.service";
import {debounceTime, map} from "rxjs/operators";
import {MatSnackBar} from "@angular/material";
import {Item} from "../model/item";
import {EnhancedItem} from "../model/enhanced-item";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  units:AsyncSubject<any> = new AsyncSubject<any>();
  itemInventory:AsyncSubject<any> = new AsyncSubject<any>();
  espers:AsyncSubject<any> = new AsyncSubject<any>();
  settings:AsyncSubject<any> = new AsyncSubject<any>();

  itemInventoryChange: Subject<void> = new Subject();

  constructor(private http:HttpClient, private context: ContextService, private snackBar:MatSnackBar) { }

  getUserData():AsyncSubject<any> {

    let result:AsyncSubject<boolean> = new AsyncSubject<boolean>();
    this.context.server.subscribe(server => {
      this.http.get<any>(`${environment.baseUrl}/${server}/userData`).subscribe(
        data => {
          this.units.next(data["units"]);
          this.units.complete();
          this.itemInventory.next(data["itemInventory"]);
          this.itemInventory.complete();
          this.espers.next(data["espers"]);
          this.espers.complete();
          this.settings.next(data["settings"]);
          this.settings.complete();

          result.next(true);
          result.complete();
        },
        () => {
          result.next(false);
          result.complete();
        });
      this.itemInventoryChange.pipe(debounceTime(3000)).subscribe(() => {
        this.itemInventory.subscribe(itemInventory => {
          this.http.put(`${environment.baseUrl}/${server}/itemInventory`, itemInventory).subscribe(
            () => {this.snackBar.open("Item inventory saved", "OK", {duration:2000})},
            () => {this.snackBar.open("Error : Item inventory not saved", "KO", {duration:3000})}
          );
        });
      });
    });


    return result;
  }

  addItem(itemId:number) {
    this.itemInventory.subscribe(itemInventory => {
      if (itemInventory) {
        if (itemInventory[itemId]) {
          itemInventory[itemId]++;
        } else {
          itemInventory[itemId] = 1;
        }
        this.itemInventoryChange.next();
      }
    });
  }

  removeItem(itemId:number) {
    this.itemInventory.subscribe(itemInventory => {
      if (itemInventory) {
        if (itemInventory[itemId]) {
          itemInventory[itemId]--;
          if (itemInventory[itemId] == 0) {
            delete itemInventory[itemId];
          }
          this.itemInventoryChange.next();
        }
      }
    });
  }

  getEnhancedVersions(item:Item): Observable<EnhancedItem[]> {
    return this.itemInventory.pipe(map(itemInventory => {
      if (itemInventory[item.id]) {
        let result = [];
        let number = itemInventory[item.id];
        if (itemInventory.enhancements && itemInventory.enhancements[item.id]) {
          itemInventory.enhancements[item.id].forEach(enhancements => {
            result.push(new EnhancedItem(item, enhancements));
            number--;
          })
        }
        for (; number > 0; number--) {
          result.push(new EnhancedItem(item, []));
        }
        return result;
      } else {
        return [];
      }
    }));
  }

  saveEnhancements(enhancedItems: EnhancedItem[]) {
    if (enhancedItems && enhancedItems.length > 1) {
      let itemId = enhancedItems[0].id;
      this.itemInventory.subscribe(itemInventory => {
        if (!itemInventory.enhancements) {
          itemInventory.enhancements = {};
        }
        if (enhancedItems.some(e => e.enhancements.length > 0)) {
          itemInventory.enhancements[itemId] = enhancedItems.filter(e => e.enhancements.length > 0).map(e => e.enhancements);
        } else {
          delete itemInventory.enhancements[itemId];
        }
        this.itemInventoryChange.next();
      });
    }
  }
}
