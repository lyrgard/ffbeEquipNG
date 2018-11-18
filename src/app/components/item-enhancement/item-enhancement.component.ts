import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from "../../model/item";
import {environment} from "../../../environments/environment";
import {itemWorldConstants} from "../../model/item-world-constants";
import {EnhancedItem} from "../../model/enhanced-item";

@Component({
  selector: 'app-item-enhancement',
  templateUrl: './item-enhancement.component.html',
  styleUrls: ['./item-enhancement.component.css']
})
export class ItemEnhancementComponent implements OnInit {

  @Input() item:EnhancedItem;
  @Output() enhancementChanged = new EventEmitter<void>();
  environment = environment;
  enhancementOpened = false;
  ITEM_ENHANCEMENT_TYPES = itemWorldConstants.ITEM_ENHANCEMENT_TYPES;
  ITEM_ENHANCEMENT_LABELS = itemWorldConstants.ITEM_ENHANCEMENT_LABELS;
  valueByIndex = ['15', '12', '10', '7', '5', '3', '1'];

  constructor() { }

  ngOnInit() {
  }

  toggle(value:string) {
    if (this.item.toggleEnhancement(value)) {
      this.enhancementChanged.emit();
    }
  }
}
