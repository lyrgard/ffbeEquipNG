import { Injectable } from '@angular/core';
import {LocalStorageService} from "./local-storage.service";
import {HttpClient} from "@angular/common/http";
import {AsyncSubject, Observable} from "rxjs/index";
import {ContextService, Language} from "./context.service";
import {environment} from "../../environments/environment";
import {constants} from "../model/constants";
import {Item} from "../model/item";
import {BaseItem} from "../model/base-item";
import {ItemReleaseDay} from "../model/item-release-day";
import {ItemReleaseEvent} from "../model/item-release-event";

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {

  private $version:AsyncSubject<number>
  private $items:AsyncSubject<Item[]>;
  private $itemsWithoutDuplicates:AsyncSubject<Item[]>;
  private $units:AsyncSubject<any>;
  private $itemHistory:AsyncSubject<ItemReleaseDay[]>;

  constructor(private localStorage:LocalStorageService, private http:HttpClient, private context:ContextService) {
  }

  getItems():AsyncSubject<Item[]> {
    if (!this.$items) {
      this.$items = new AsyncSubject();
      this.getUnits().subscribe(units => {
        this.getFilename("data", true).subscribe(filename => {
          let storedData = this.localStorage.getFile(filename);
          if (storedData) {
            this.$items.next(storedData.map(i => new BaseItem(i, units)));
            this.$items.complete();

          } else {
            this.context.server.subscribe(server => {
              this.http.get<any[]>(`${environment.baseUrl}/${server}/${filename}`).subscribe(items => {
                this.localStorage.setFile(filename, items);
                this.$items.next(items.map(i => new BaseItem(i, units)));
                this.$items.complete();
              })
            });
          }
        });
      });
    }
    return this.$items;
  }

  getItemsWithoutDuplicates():AsyncSubject<Item[]> {
    if (!this.$itemsWithoutDuplicates) {
      this.$itemsWithoutDuplicates = new AsyncSubject<Item[]>();
      this.getItems().subscribe(items => {
        let idsAlreadyAdded: Map<string, Item> = new Map<string, Item>();
        items.forEach(item => {
          if (idsAlreadyAdded.get(item.id)) {
            let previousItem = idsAlreadyAdded.get(item.id);
            let conditionNumber1 = previousItem.equipedConditions.length;
            let conditionNumber2 = item.equipedConditions.length;
            if (conditionNumber2 > conditionNumber1) {
              idsAlreadyAdded.set(item.id, item);
            }
          } else {
            idsAlreadyAdded.set(item.id, item);
          }
        });
        this.$itemsWithoutDuplicates.next(Array.from(idsAlreadyAdded.values()));
        this.$itemsWithoutDuplicates.complete();
      });
    }

    return this.$itemsWithoutDuplicates;
  }

  getItemHistory():AsyncSubject<ItemReleaseDay[]> {
    if (!this.$itemHistory) {
      this.$itemHistory = new AsyncSubject();
      this.getFilename("lastItemReleases", false).subscribe(filename => {
        let storedData = this.localStorage.getFile(filename);
        if (storedData) {
          this.populateItemHistory(storedData);
        } else {
          this.context.server.subscribe(server => {
            this.http.get(`${environment.baseUrl}/${server}/${filename}`).subscribe(latestReleasedItems => {
              this.localStorage.setFile(filename, latestReleasedItems);
              this.populateItemHistory(latestReleasedItems);
            })
          });
        }
      });
    }
    return this.$itemHistory;
  }

  private populateItemHistory(latestReleasedItems:any) {
    this.getItems().subscribe(items => {
      this.getUnits().subscribe(units => {
        let tmrByUnitId: Map<string, string> = new Map<string, string>();
        let stmrByUnitId: Map<string, string> = new Map<string, string>();
        let itemIdsByEvent: Map<string, string[]> = new Map<string, string[]>();
        let itemById: Map<string, Item> = new Map<string, Item>();

        let itemHistory: ItemReleaseDay[] = [];

        items.forEach(item => {
          if (item.tmrUnit) {
            tmrByUnitId.set(item.tmrUnit, item.id);
          }
          if (item.stmrUnit) {
            tmrByUnitId.set(item.stmrUnit, item.id);
          }
          if (item.eventName) {
            if (!itemIdsByEvent.has(item.eventName)) {
              itemIdsByEvent.set(item.eventName, []);
            }
            let ids = itemIdsByEvent.get(item.eventName);
            if (!ids.includes(item.id)) {
              ids.push(item.id);
            }
          }
          if (itemById.get(item.id)) {
            let previousItem = itemById.get(item.id);
            let conditionNumber1 = previousItem.equipedConditions.length;
            let conditionNumber2 = item.equipedConditions.length;
            if (conditionNumber2 > conditionNumber1) {
              itemById.set(item.id, item);
            }
          } else {
            itemById.set(item.id, item);
          }

        });
        latestReleasedItems.forEach(day => {
          let itemReleaseEvents: ItemReleaseEvent[] = [];
          day.sources.forEach(source => {
            if (source.type == "banner") {
              let name:string = source.units.map(unitId => units[unitId].name).join(', ');
              let items:Item[] = source.units.filter(unitId =>  tmrByUnitId.get(unitId)).map(unitId =>  itemById.get(tmrByUnitId.get(unitId)));
              items = items.concat(source.units.filter(unitId =>  stmrByUnitId.get(unitId)).map(unitId =>  itemById.get(stmrByUnitId.get(unitId))));
              itemReleaseEvents.push(new ItemReleaseEvent(name, items));
            } else if (source.type == "event") {
              let items = (itemIdsByEvent.get(source.name) || []).map(itemId => itemById.get(itemId));
              itemReleaseEvents.push(new ItemReleaseEvent(source.name, items));
            } else if (source.type == "storyPart") {
              let items = source.ids.map(itemId => itemById.get(itemId));
              itemReleaseEvents.push(new ItemReleaseEvent(source.name, items));
            }
          });
          itemHistory.push(new ItemReleaseDay(day.date, itemReleaseEvents));
        });
        this.$itemHistory.next(itemHistory);
        this.$itemHistory.complete();
      });
    });
  }


  getUnits():AsyncSubject<any> {
    if (!this.$units) {
      this.$units = new AsyncSubject();
      this.getFilename("units", true).subscribe(filename => {
        let storedData = this.localStorage.getFile(filename);
        if (storedData) {
          this.$units.next(storedData);
          this.$units.complete();
        } else {
          this.context.server.subscribe(server => {
            this.http.get(`${environment.baseUrl}/${server}/${filename}`).subscribe(units => {
              this.localStorage.setFile(filename, units);
              this.$units.next(units);
              this.$units.complete();
            })
          });
        }
      });
    }
    return this.$units;
  }

  private getFilename(base:string, localized:boolean = false): AsyncSubject<string> {
    let result = new AsyncSubject<string>();
    if (localized) {
      this.context.language.subscribe(language => {
        if (language != Language.JP && language != Language.EN) {
          base = `${base}_${language.toString().toLowerCase()}`;
        }
        this.getFilename(base).subscribe(filename => {
          result.next(filename);
          result.complete();
        })
      })
    } else {
      result.next(`${base}.json`)
      result.complete();
    }
    return result;
  }
}
