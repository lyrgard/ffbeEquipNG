import { Injectable } from '@angular/core';
import {SearchFilter} from "../pages/encyclopedia/search-filter";

@Injectable({
  providedIn: 'root'
})
export class SiteStateService {

  public encyclopediaSearchFilter:SearchFilter = new SearchFilter();

  constructor() { }
}
