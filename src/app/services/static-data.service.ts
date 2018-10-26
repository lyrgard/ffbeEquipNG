import { Injectable } from '@angular/core';
import {LocalStorageService} from "./local-storage.service";
import {HttpClient} from "@angular/common/http";
import {AsyncSubject} from "rxjs/index";
import {ContextService, Language} from "./context.service";
import {environment} from "../../environments/environment";
import {constants} from "../model/constants";

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {

  private $version:AsyncSubject<number>
  private $items:AsyncSubject<any>;
  private $units:AsyncSubject<any>;

  constructor(private localStorage:LocalStorageService, private http:HttpClient, private context:ContextService) {
  }

  getItems():AsyncSubject<any> {
    if (!this.$items) {
      this.$items = new AsyncSubject();
      this.getFilename("data", true).subscribe(filename => {
        let storedData = this.localStorage.getFile(filename);
        if (storedData) {
          this.prepareSearch(storedData).then(() => {
            this.$items.next(storedData);
            this.$items.complete();
          });

        } else {
          this.context.server.subscribe(server => {
            this.http.get<any[]>(`${environment.baseUrl}/${server}/${filename}`).subscribe(items => {
              this.localStorage.setFile(filename, items);
              this.prepareSearch(items).then(() => {
                this.$items.next(items);
                this.$items.complete();
              });
            })
          });
        }
      });
    }
    return this.$items;
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

  private async prepareSearch(data:any[]): Promise<void> {
    return new Promise<void>(resolve => {
      this.getUnits().subscribe(units => {
        data.forEach(item => {
          let textToSearch = item["name"];

          if (item.jpname) {
            textToSearch += item["jpname"];
          }
          if (item["evade"]) {
            if (item.evade.physical) {
              textToSearch += "|" + "Evade physical " + item.evade.physical + "%";
            }
            if (item.evade.magical) {
              textToSearch += "|" + "Evade magical " + item.evade.magical + "%";
            }
          }
          if (item["resist"]) {
            for (let i = item.resist.length; i--;) {
              textToSearch += "|" + item.resist[i].name;
            }
          }
          if (item["element"]) {
            for (let i = item.element.length; i--;) {
              textToSearch += "|" + item.element[i];
            }
          }
          if (item["ailments"]) {
            for (let i = item.ailments.length; i--;) {
              textToSearch += "|" + item.ailments[i].name;
            }
          }
          if (item["exclusiveUnits"]) {
            textToSearch += "|Only ";
            var first = true;
            for (let i = 0, len = item.exclusiveUnits.length; i < len;i++) {
              if (units[item.exclusiveUnits[i]]) {
                if (first) {
                  first = false;
                } else {
                  textToSearch += ", ";
                }
                textToSearch += units[item.exclusiveUnits[i]].name;
              }
            }
          }
          if (item["exclusiveSex"]) {
            textToSearch += "|Only " + item["exclusiveSex"];
          }
          if (item["condition"]) {
            textToSearch += "|Only " + item["condition"];
          }
          if (item.mpRefresh) {
            textToSearch += "|Recover MP (" + item.mpRefresh + "%) per turn";
          }
          if (item["special"]) {
            for (let i = 0, len = item.special.length; i < len;i++) {
              textToSearch += "|" + item.special[i];
            }
          }
          if (item.singleWielding) {
            for (let index in constants.BASE_STATS) {
              if (item.singleWielding[constants.BASE_STATS[index]]) {
                textToSearch += "|" + "Increase equipment " + constants.BASE_STATS[index].toUpperCase() + "(" + item.singleWielding[constants.BASE_STATS[index]] + "%) when single wielding"
              }
            }
          }
          if (item.singleWieldingOneHanded) {
            for (let index in constants.BASE_STATS) {
              if (item.singleWieldingOneHanded[constants.BASE_STATS[index]]) {
                textToSearch += "|" + "Increase equipment " + constants.BASE_STATS[index].toUpperCase() + "(" + item.singleWieldingOneHanded[constants.BASE_STATS[index]] + "%) when single wielding a one-handed weapon"
              }
            }
          }
          if (item.dualWielding) {
            for (let index in constants.BASE_STATS) {
              if (item.dualWielding[constants.BASE_STATS[index]]) {
                textToSearch += "|" + "Increase equipment " + constants.BASE_STATS[index].toUpperCase() + "(" + item.dualWielding[constants.BASE_STATS[index]] + "%) when dual wielding"
              }
            }
          }
          if (item.killers) {
            for (let i = 0, len = item.killers.length; i < len;i++) {
              textToSearch += "|killer " + item.killers[i].name;
            }
          }
          if (item.accuracy) {
            textToSearch += "|" + "Increase Accuracy: " + item.accuracy + "%";
          }

          if (item.jumpDamage) {
            textToSearch += "|" + "Increase damage dealt by jump attacks by "+ item.jumpDamage + "%";
          }
          if (item.lbDamage) {
            textToSearch += "|" + "Increase LB damage (+" + item.lbDamage + "%)";
          }
          if (item.lbFillRate) {
            textToSearch += "|" + "Increase LB gauge fill rate (" + item.lbFillRate + "%)";
          }
          if (item.lbPerTurn) {
            let value;
            if (item.lbPerTurn.min == item.lbPerTurn.max) {
              value = item.lbPerTurn.min;
            } else {
              value = item.lbPerTurn.min + "-" + item.lbPerTurn.max;
            }
            textToSearch += "|" + "Increase LB gauge each turn (" + value + ")";
          }
          if (item.evoMag) {
            textToSearch += "|" + "Increase Esper summon damage by "+ item.evoMag + "%";
          }
          if (item.esperStatsBonus) {
            textToSearch += "|" + "Increase esper's bonus stats ("+ item.esperStatsBonus.hp + "%)";
          }
          if (item["tmrUnit"] && units[item["tmrUnit"]]) {
            textToSearch += "|" + units[item["tmrUnit"]].name;
          }
          if (item["stmrUnit"] && units[item["stmrUnit"]]) {
            textToSearch += "|" + units[item["stmrUnit"]].name;
          }
          for (let index in item.access) {
            textToSearch += "|" + item.access[index];
          }
          if (item.partialDualWield) {
            textToSearch += "|partial dual wield";
            for (let i = 0, len = item.partialDualWield.length; i < len;i++) {
              textToSearch += " " + item.partialDualWield[i];
            }
          }
          item.searchString = textToSearch;
        });
        resolve();
      });
    });
  }
}
