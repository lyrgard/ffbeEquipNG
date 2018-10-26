import {Subject} from "rxjs/index";
import {debounceTime, distinctUntilChanged} from "rxjs/internal/operators";

export class SearchFilter {

  onChange = new Subject<void>();
  private searchTextChange = new Subject<string>();
  private _searchText:string = "";

  constructor() {
    this.searchTextChange.pipe(debounceTime(500),distinctUntilChanged()).subscribe(searchText => {
      this._searchText = searchText;
      this.onChange.next()
    });
  }

  get searchText() {
    return this._searchText;
  }

  set searchText(text:string) {
    this.searchTextChange.next(text);
  }

  isSelected(item:any): boolean {
    if (this._searchText != "" && this.containsText(this._searchText, item)) {
      return true;
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
