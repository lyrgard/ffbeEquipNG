import {Component, OnInit, ViewChild} from '@angular/core';
import {StaticDataService} from "../../services/static-data.service";
import {Item} from "../../model/item";
import {ContextService, Pages} from "../../services/context.service";
import {Mode} from "../../components/item-tile/item-tile.component";
import {UserDataService} from "../../services/user-data.service";
import {environment} from "../../../environments/environment";
import {MatSidenav} from "@angular/material";

@Component({
  selector: 'app-item-inventory',
  templateUrl: './item-inventory.component.html',
  styleUrls: ['./item-inventory.component.css']
})
export class ItemInventoryComponent implements OnInit {
  @ViewChild('sideDrawer') sideDrawer: MatSidenav;

  $items:Item[];
  $ownedItems:any;
  ItemMode = Mode;
  environment = environment;
  $selectedItem:Item;

  constructor(private contextService: ContextService,
              private staticDataService:StaticDataService,
              private userDataService:UserDataService) { }

  ngOnInit() {
    this.contextService.setCurrentPage(Pages.ITEM_INVENTORY);
    this.staticDataService.getItems().subscribe(items => {
      this.$items = items.slice(0, 20);
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
    if (this.$ownedItems) {
      if (this.$ownedItems[itemId]) {
        this.$ownedItems[itemId]++;
      } else {
        this.$ownedItems[itemId] = 1;
      }
    }
  }

  removeItem(itemId:number) {
    if (this.$ownedItems) {
      if (this.$ownedItems[itemId]) {
        this.$ownedItems[itemId]--;
        if (this.$ownedItems[itemId] == 0) {
          delete this.$ownedItems[itemId];
        }
      }
    }
  }

  openItemEnhancement(item: Item) {
    this.$selectedItem = item;
    this.sideDrawer.open();
  }
}
