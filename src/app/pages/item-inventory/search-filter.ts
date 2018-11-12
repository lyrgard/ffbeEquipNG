import {Observable, Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";
import {Item} from "../../model/item";
import {constants} from "../../model/constants";

export class SearchFilter {

  onChange:Observable<void>;

  private allChanges = new Subject<void>();
  private _searchText:string = "";
  private _equipmentType:string = "dagger";

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


  get equipmentType(): string {
    return this._equipmentType;
  }

  set equipmentType(value: string) {
    this._equipmentType = value;
    this.allChanges.next();
  }

  isEmpty() {
    return this._searchText == ""
      && this._equipmentType == ""
  }

  isSelected(item:Item): boolean {
    if (this._equipmentType == "" || this._equipmentType == item.type) {
      if (this._searchText == "" || this.containsText(this._searchText, item)) {
        return true;
      }
    }
    return false;
  }

  containsText(text, item) {
    var result = true;
    let self = this;
    text.split(" ").forEach(function (token) {
      result = result && item.name.match(new RegExp(self.escapeRegExp(token),'i'));
    });
    return result;
  }

  escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
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
