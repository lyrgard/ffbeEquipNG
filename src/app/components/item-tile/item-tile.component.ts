import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {environment} from "../../../environments/environment";
import {common} from "../../common";
import {ContextService, Server} from "../../services/context.service";

import {constants} from '../../model/constants';
import {StaticDataService} from "../../services/static-data.service";
import {Item} from "../../model/item";

export enum Mode {
  CONCISE, DETAILED,
}

@Component({
  selector: 'app-item-tile',
  templateUrl: './item-tile.component.html',
  styleUrls: ['./item-tile.component.css', '../../../assets/css-img/equipments.css', '../../../assets/css-img/elements.css']
})
export class ItemTileComponent implements OnInit, OnChanges {

  @Input() item:Item;
  @Input() mode:Mode = Mode.DETAILED;

  environment = environment;
  Mode = Mode;

  itemIcon:string;
  itemIconClass:string;
  itemTypeIconClass:string;
  baseStats = constants.BASE_STATS;
  specials:any[] = [];
  tmrUnit:any;
  stmrUnit:any;
  exclusiveUnits:any[];


  constructor(private contextService:ContextService, private statDataService:StaticDataService) { }

  ngOnInit() {
    if (this.item) {
      this.onItemchange();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.onItemchange();
  }

  onItemchange() {
    if (this.item.icon) {
      this.itemIcon = `${environment.baseUrl}/img/items/${this.item.icon}`;
    } else if (this.item.type == "esper") {
      // no lazyload for espers (uses CSS background)
      this.itemIconClass = `img-esper-${common.escapeName(this.item.name)}`;
    } else if (this.item.type == "unavailable") {
      // no image
    } else {
      this.itemIconClass = `img-equipment-${this.item.type}`;
    }

    if (this.item.type != "esper" && this.item.type != "monster" && this.item.type != "fake") {
      this.itemTypeIconClass = `img-equipment-${this.item.type}`;
    }

    if (this.item.special) {
      this.item.special.forEach(special => {
        let specialData:any = {};
        let skillsFound = special.match(/(\[[^\]]*\])/g);
        if (skillsFound.length == 0) {
          specialData.text = special;
        } else {
          let skillFound = skillsFound[0];
          let index = special.indexOf(skillFound);
          if (index > 0) {
            specialData.before = special.substr(0, index);
          }
          specialData.text = special.substr(index + skillFound.length);
          let tokens = skillFound.substring(1, skillFound.length - 1).split("|");
          if (tokens.length == 1) {
            specialData.skillName = tokens[0];
          } else if (tokens.length == 2) {
            specialData.skillName = tokens[0];
            specialData.icon = tokens[1];
          } else if (tokens.length == 3) {
            specialData.wikiEntry = tokens[0];
            specialData.skillName = tokens[1];
            specialData.icon = tokens[2];
          }
        }
        this.specials.push(specialData);
      });
    }

    if (this.item.tmrUnit) {
      this.statDataService.getUnits().subscribe(units => {
        if (this.item.tmrUnit) {
          this.tmrUnit = units[this.item.tmrUnit];
        }
      });
    }

    if (this.item.stmrUnit) {
      this.statDataService.getUnits().subscribe(units => {
        if (this.item.stmrUnit) {
          this.stmrUnit = units[this.item.stmrUnit];
        }
      });
    }

    if (this.item.exclusiveUnits) {
      this.statDataService.getUnits().subscribe(units => {
        this.exclusiveUnits = this.item.exclusiveUnits.map(id => {
          if (units[id]) {
            return units[id];
          } else {
            return null;
          }
        });
      });
    }
  }



}
