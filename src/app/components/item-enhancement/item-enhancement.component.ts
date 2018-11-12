import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../model/item";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-item-enhancement',
  templateUrl: './item-enhancement.component.html',
  styleUrls: ['./item-enhancement.component.css']
})
export class ItemEnhancementComponent implements OnInit {

  @Input() item:Item;
  environment = environment;

  constructor() { }

  ngOnInit() {
  }

}
