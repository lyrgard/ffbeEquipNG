import {Observable, Subject} from "rxjs/index";
import {debounceTime, distinctUntilChanged} from "rxjs/internal/operators";

export class SearchFilter {

  onChange:Observable<void>;

  private allChanges = new Subject<void>();
  private _searchText:string = "";
  private _sort:string = "";
  private _equipmentTypes:string[] = [];
  private _elements:string[] = [];
  private _ailments:string[] = [];


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

  isEmpty() {
    return this._searchText == ""
      && this._sort == ""
      && this._equipmentTypes.length == 0
      && this._elements.length == 0
      && this._ailments.length == 0
  }

  isSelected(item:any): boolean {
    if (this._elements.length == 0 || (item.element && this._elements.some(e => item.element.includes(e))) || (this._elements.includes("noElement") && !item.element) || (item.resist && item.resist.map(r => r.name).some(e => this._elements.includes(e)))) {
      if (ailments.length == 0 || (item.ailments && matches(ailments, item.ailments.map(function (ailment) {
          return ailment.name;
        }))) || (item.resist && matches(ailments, item.resist.map(function (res) {
          return res.name;
        })))) {
        if (this._equipmentTypes.length == 0 || this._equipmentTypes.includes(item.type)) {
          if (this._searchText == "" || this.containsText(this._searchText, item)) {
            return true;
          }
        }
      }
    }
    return false;
  }

  containsText(text, item) {
    var result = true;
    let self = this;
    text.split(" ").forEach(function (token) {
      result = result && item.searchString.match(new RegExp(self.escapeRegExp(token),'i'));
    });
    return result;
  }

  escapeRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }
}
