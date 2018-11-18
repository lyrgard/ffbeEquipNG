import { Injectable } from '@angular/core';
import {EncyclopediaSearchFilter as EncyclopediaSearchFilter} from "../pages/encyclopedia/encyclopedia-search-filter";
import {ItemInventorySearchFilter as ItemInventorySearchFilter} from "../pages/item-inventory/item-inventory-search-filter";

@Injectable({
  providedIn: 'root'
})
export class SiteStateService {

  encyclopediaSearchFilter:EncyclopediaSearchFilter = new EncyclopediaSearchFilter();
  itemInventorySearchFilter:ItemInventorySearchFilter = new ItemInventorySearchFilter();
  constructor() { }
}
