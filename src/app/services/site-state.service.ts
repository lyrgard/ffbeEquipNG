import { Injectable } from '@angular/core';
import {SearchFilter as EncyclopediaSearchFilter} from "../pages/encyclopedia/search-filter";
import {SearchFilter as ItemInventorySearchFilter} from "../pages/item-inventory/search-filter";

@Injectable({
  providedIn: 'root'
})
export class SiteStateService {

  encyclopediaSearchFilter:EncyclopediaSearchFilter = new EncyclopediaSearchFilter();
  itemInventorySearchFilter:ItemInventorySearchFilter = new ItemInventorySearchFilter();
  constructor() { }
}
