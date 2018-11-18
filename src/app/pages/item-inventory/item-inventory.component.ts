import {Component, OnInit, ViewChild} from '@angular/core';
import {StaticDataService} from "../../services/static-data.service";
import {Item} from "../../model/item";
import {ContextService, Pages} from "../../services/context.service";
import {Mode} from "../../components/item-tile/item-tile.component";
import {UserDataService} from "../../services/user-data.service";
import {environment} from "../../../environments/environment";
import {constants} from "../../model/constants";
import {ItemInventorySearchFilter} from "./item-inventory-search-filter";
import {SiteStateService} from "../../services/site-state.service";
import {MatSidenav} from "@angular/material";
import {EnhancedItem} from "../../model/enhanced-item";
import {ItemReleaseDay} from "../../model/item-release-day";

@Component({
  selector: 'app-item-inventory',
  templateUrl: './item-inventory.component.html',
  styleUrls: ['./item-inventory.component.css']
})
export class ItemInventoryComponent implements OnInit {
  @ViewChild('sideDrawer') sideDrawer: MatSidenav;

  $items:Item[];
  $searchResult:Item[];
  $filteredItems:Item[];
  $itemHistory:ItemReleaseDay[];
  $filteredHistory:ItemReleaseDay[];
  $ownedItems:any;
  ItemMode = Mode;
  environment = environment;
  itemTypes = constants.EQUIPMENT_TYPE_LIST;
  searchFilter:ItemInventorySearchFilter;
  currentPageItems:number = 0;
  currentPageHistory:number = 0;
  $enhancedItems:EnhancedItem[];

  constructor(private contextService: ContextService,
              private staticDataService:StaticDataService,
              private userDataService:UserDataService,
              private siteState:SiteStateService) {
    this.searchFilter = this.siteState.itemInventorySearchFilter;
  }

  ngOnInit() {
    this.contextService.setCurrentPage(Pages.ITEM_INVENTORY);
    this.staticDataService.getItemHistory().subscribe(itemHistory => {
      this.$itemHistory = itemHistory;
      this.changePageHistory(0);
    });
    this.staticDataService.getItems().subscribe(items => {
      this.$items = items;
      this.searchFilter.onChange.subscribe(() => {
        this.$searchResult = this.$items.filter(item => this.searchFilter.isSelected(item)).sort(this.getSort(this.searchFilter.equipmentType));
        this.changePageItems(0);
      });
      this.$searchResult = this.$items.filter(item => this.searchFilter.isSelected(item)).sort(this.getSort(this.searchFilter.equipmentType));
      this.changePageItems(0);
    });
    this.userDataService.itemInventory.subscribe(ownedItems => {
      if (ownedItems && Object.keys(ownedItems).length > 0) {
        this.$ownedItems = ownedItems;
      } else {
        this.$ownedItems = null;
      }
    });
  }

  addItem(itemId:number) {
    this.userDataService.addItem(itemId);
  }

  removeItem(itemId:number) {
    this.userDataService.removeItem(itemId);
  }

  changePageItems(page) {
    this.currentPageItems = page;
    this.$filteredItems = this.$searchResult.slice(this.currentPageItems * 50, this.currentPageItems * 50 + 50);
  }

  changePageHistory(page) {
    this.currentPageHistory = page;
    this.$filteredHistory = this.$itemHistory.slice(this.currentPageHistory * 5, this.currentPageHistory * 5 + 5);
  }

  private getSort(type:string): (item1:Item, item2:Item) => number {
    if (constants.WEAPON_TYPES.includes(type)) {
      return this.getSortByStats(["atk","mag","def","spr"]);
    } else if (type == "materia") {
      return this.compareName;
    } else {
      return this.getSortByStats(["def","spr","atk","mag","hp","mp"]);
    }
  }

  private getSortByStats(sortOrder) {
    return (item1:Item, item2:Item) => {
      for (var index in sortOrder) {
        let stat = sortOrder[index];
        let stat1 = item1[stat].flat;
        let stat2 = item2[stat].flat;
        if (stat1 == stat2) {
          continue;
        }
        return stat2 - stat1;
      }
      let stat1 = item1.sortId
      let stat2 = item2.sortId;
      if (stat1 != stat2) {
        return stat2 - stat1;
      }
      return this.compareName(item1, item2);
    }
  }

  private compareName(item1:Item, item2:Item) {
    let name1 = item1.jpname || item1.name;
    let name2 = item2.jpname || item2.name;
    var minLength = Math.min(name1.length, name2.length);
    for (var i = 0; i < minLength; i++) {
      var letter1 = name1.substr(i,1);
      var letter2 = name2.substr(i,1);
      if (letter1 == letter1.toUpperCase()) {
        if (letter2 == letter2.toUpperCase()) {
          var result = letter1.localeCompare(letter2);
          if (result != 0) {
            return result;
          }
        } else {
          return -1;
        }
      } else {
        if (letter2 == letter2.toUpperCase()) {
          return 1;
        } else {
          var result = letter1.localeCompare(letter2);
          if (result != 0) {
            return result;
          }
        }
      }
    }
    if (name1.length == name2.length) {
      return 0;
    } else if (name1.length == minLength) {
      return -1;
    } else {
      return 1;
    }
  }

  openItemEnhancement(item: Item) {
    this.userDataService.getEnhancedVersions(item).subscribe(items => this.$enhancedItems = items);
    this.sideDrawer.open();
  }

  enhancementsChanged() {
    if (this.$enhancedItems) {
      this.userDataService.saveEnhancements(this.$enhancedItems);
    }
  }
}
