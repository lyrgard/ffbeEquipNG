import {Injectable} from '@angular/core';
import {AsyncSubject, BehaviorSubject, Observable, Subject} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ContextService} from "./context.service";
import {LoggingState, LoginService} from "./login.service";
import {debounceTime} from "rxjs/operators";
import {MatSnackBar} from "@angular/material";

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
        e => {
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
}
