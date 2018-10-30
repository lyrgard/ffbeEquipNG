import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";
import {common} from "../common";
import {ContextService, Server} from "../services/context.service";

import {constants} from '../model/constants';
import {StaticDataService} from "../services/static-data.service";

@Component({
  selector: 'app-item-tile',
  templateUrl: './item-tile.component.html',
  styleUrls: ['./item-tile.component.css', '../../assets/css-img/equipments.css', '../../assets/css-img/elements.css']
})
export class ItemTileComponent implements OnInit {

  @Input() item:any;

  environment = environment;

  itemIcon:string;
  itemIconClass:string;
  itemTypeIconClass:string;
  baseStats = constants.BASE_STATS;
  itemElements:string[];
  elementResists: any[] = [];
  ailmentResists: any[] = [];
  specials:any[] = [];
  tmrUnit:any;
  stmrUnit:any;
  exclusiveUnits:any[];


  constructor(private contextService:ContextService, private statDataService:StaticDataService) { }

  ngOnInit() {
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

    if (constants.WEAPON_TYPES.includes(this.item.type)) {
      if (this.item.element) {
        this.itemElements = this.item.element;
      }
    }

    if (this.item.resist) {
      this.item.resist.forEach(resist => {
        if (constants.AILMENT_LIST.includes(resist.name)) {
          this.ailmentResists.push(resist);
        } else {
          this.elementResists.push(resist);
        }
      })
    }

    if (this.item.special) {
      this.item.special.filter(special => special != "twoHanded" && special != "notStackable" && special != "dualWield").forEach(special => {
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
        this.tmrUnit = units[this.item.tmrUnit];
      });
    }

    if (this.item.stmrUnit) {
      this.statDataService.getUnits().subscribe(units => {
        this.stmrUnit = units[this.item.stmrUnit];
      });
    }

    if (this.item.exclusiveUnits) {
      this.statDataService.getUnits().subscribe(units => {
        this.exclusiveUnits = this.item.exclusiveUnits.map(id => units[id]);
      });
    }


  }



}
