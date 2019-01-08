import {Observable, Subject} from "rxjs/index";
import {debounceTime} from "rxjs/internal/operators";
import {constants} from "../../model/constants";
import {Item} from "../../model/item";

export class EncyclopediaSearchFilter {

  onChange:Observable<void>;

  private allChanges = new Subject<void>();
  private _searchText:string = "";
  private _sort:string = "";
  private _equipmentTypes:string[] = [];
  private _elements:string[] = [];
  private _ailments:string[] = [];
  private _physicalKillers:string[] = [];
  private _magicalKillers:string[] = [];
  private _accessToRemove:string[] = [];
  private _additionalStats:string[] = [];
  private _excludeNotReleasedYet:boolean = true;
  private _onlyShowOwnedItems = false;


  constructor() {
    this.onChange = this.allChanges.pipe(debounceTime(300));
  }

  get searchText() {
    return this._searchText;
  }

  set searchText(text:string) {
    this._searchText = text;
    this.allChanges.next();
  }


  get equipmentTypes(): string[] {
    return this._equipmentTypes;
  }

  set equipmentTypes(value: string[]) {
    this._equipmentTypes = value;
    this.allChanges.next();
  }

  get sort(): string {
    return this._sort;
  }

  set sort(value: string) {
    this._sort = value;
    this.allChanges.next();
  }

  get elements(): string[] {
    return this._elements;
  }

  set elements(value: string[]) {
    this._elements = value;
    this.allChanges.next();
  }

  get ailments(): string[] {
    return this._ailments;
  }

  set ailments(value: string[]) {
    this._ailments = value;
    this.allChanges.next();
  }

  get physicalKillers(): string[] {
    return this._physicalKillers;
  }

  set physicalKillers(value: string[]) {
    this._physicalKillers = value;
    this.allChanges.next();
  }

  get magicalKillers(): string[] {
    return this._magicalKillers;
  }

  set magicalKillers(value: string[]) {
    this._magicalKillers = value;
    this.allChanges.next();
  }


  get accessToRemove(): string[] {
    return this._accessToRemove;
  }

  set accessToRemove(value: string[]) {
    this._accessToRemove = value;
    this.allChanges.next();
  }

  get additionalStats(): string[] {
    return this._additionalStats;
  }

  set additionalStats(value: string[]) {
    this._additionalStats = value;
    this.allChanges.next();
  }

  get excludeNotReleasedYet(): boolean {
    return this._excludeNotReleasedYet;
  }

  set excludeNotReleasedYet(value: boolean) {
    this._excludeNotReleasedYet = value;
    this.allChanges.next();
  }

  get onlyShowOwnedItems(): boolean {
    return this._onlyShowOwnedItems;
  }

  set onlyShowOwnedItems(value: boolean) {
    this._onlyShowOwnedItems = value;
    this.allChanges.next();
  }

  isEmpty() {
    return this._searchText == ""
      && this._sort == ""
      && this._equipmentTypes.length == 0
      && this._elements.length == 0
      && this._ailments.length == 0
      && this._physicalKillers.length == 0
      && this._magicalKillers.length == 0
      && this._accessToRemove.length == 0
  }

  isSelected(item:Item, ownedItems): boolean {
    if (!this._onlyShowOwnedItems || ownedItems && ownedItems[item.id]) {
      if (!this._excludeNotReleasedYet || !item.isNotReleasedYet()) {
        if (this._elements.length == 0 || (this._elements.some(e => item.elements.includes(e))) || (this._elements.includes("noElement") && item.elements.length == 0) || (this.matches(item.effect.elementalResists, this._elements))) {
          if (this._ailments.length == 0 || this.matches(item.effect.ailments, this._ailments) || this.matches(item.effect.ailmentResists, this._ailments)) {
            if (this._equipmentTypes.length == 0 || this._equipmentTypes.includes(item.type)) {
              if (this._physicalKillers.length == 0 || this._physicalKillers.some(killer => item.effect.physicalKillers.get(killer) > 0)) {
                if (this._magicalKillers.length == 0 || this._magicalKillers.some(killer => item.effect.magicalKillers.get(killer) > 0)) {
                  if (this._accessToRemove.length == 0 || this.haveAuthorizedAccess(this._accessToRemove, item)) {
                    if (this._additionalStats.length == 0 || this._additionalStats.some(stat => item[stat].flat + item[stat].percent > 0)) {
                      if (this._sort == "" || this.hasSortedStat(item)) {
                        if (this._searchText == "" || this.containsText(this._searchText, item)) {
                          return true;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return false;
  }

  private matches(map:Map<string, number>, values:string[]) {
    let it = map.keys();
    let v = it.next();
    while(!v.done) {
      if (values.includes(v.value)) {
        return true;
      }
      v = it.next();
    }
    return false;
  }

  private hasSortedStat(item:Item) {
    if (constants.BASE_STATS.includes(this._sort)) {
      return item[this._sort].flat + item[this._sort].percent > 0
    } else if (this._sort == "inflict") {
      return item.elements.length > 0 || item.effect.ailments.size > 0 || item.effect.physicalKillers.size > 0 || item.effect.magicalKillers.size > 0;
    } else if (this._sort == "evade") {
      return item.effect.physicalEvade + item.effect.magicalEvade > 0;
    } else if (this._sort == "resist") {
      return item.effect.elementalResists.size > 0 || item.effect.ailmentResists.size > 0
    }
    return false;
  };

  containsText(text, item) {
    var result = true;
    let self = this;
    text.split(" ").forEach(function (token) {
      result = result && item.fullSearchText.match(new RegExp(self.escapeRegExp(token),'i'));
    });
    return result;
  }

  escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }

  private haveAuthorizedAccess(forbiddenAccessList, item):boolean {
    var hasAccess = false;
    if (forbiddenAccessList.includes("unitExclusive") && item.exclusiveUnits) {
      return false;
    }
    item.access.forEach(access => {
      hasAccess = hasAccess || this.isAccessAllowed(forbiddenAccessList, access);
    });
    return hasAccess;
  };

  // Return true if one access is not forbidden by filters
  private isAccessAllowed(forbiddenAccessList, access):boolean {
    var accessAllowed = true;
    forbiddenAccessList.forEach(accessToSplit => {
      accessToSplit.split('/').forEach(forbiddenAccess => {
        if (access.startsWith(forbiddenAccess) || access.endsWith(forbiddenAccess)) {
          accessAllowed = false;
        }
      });
    });
    return accessAllowed;
  }

  toHashString(): string {
    let state:any = {};
    ['searchText', 'sort'].forEach(stat => {
      if (this[stat] != "") {
        state[stat] = this[stat];
      }
    });
    ['equipmentTypes', 'elements', 'ailments', 'physicalKillers', 'magicalKillers', 'accessToRemove', 'additionalStats'].forEach(stat => {
      if (this[stat].length > 0) {
        state[stat] = this[stat];
      }
    });
    return window.btoa(encodeURIComponent(JSON.stringify(state)));
  }

  fromHashString(hash:string) {
    try {
      let state = JSON.parse(decodeURIComponent(window.atob(hash)));
      ['searchText', 'sort', 'equipmentTypes', 'elements', 'ailments', 'physicalKillers', 'magicalKillers', 'accessToRemove', 'additionalStats'].forEach(stat => {
        if (state[stat]) {
          this['_' + stat] = state[stat];
        }
      });
      this.allChanges.next();
    } catch (e) {
    }
  }
}
