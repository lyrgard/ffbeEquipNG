import { Injectable } from '@angular/core';
import {constants} from "../model/constants";
import {Item} from "../model/item";

@Injectable({
  providedIn: 'root'
})
export class SortService {

  private typeListWithEsper:string[] = constants.EQUIPMENT_TYPE_LIST.concat(["esper"]);

  constructor() { }

  sort(items:any[], baseStat, stat, ailments, elements, killers): any[] {
    return items.sort((item1, item2) => {
      let value1 = item1.calculateSortValue(baseStat, stat, ailments, elements, killers);
      let value2 = item2.calculateSortValue(baseStat, stat, ailments, elements, killers);
      if (value2 == value1) {
        var typeIndex1 = this.typeListWithEsper.indexOf(item1.type);
        var typeIndex2 = this.typeListWithEsper.indexOf(item2.type);
        if (typeIndex1 == typeIndex2) {
          return item1.name.localeCompare(item2.name);
        } else {
          return typeIndex1 - typeIndex2;
        }
      } else {
        return value2 - value1;
      }
    });
  }
}
