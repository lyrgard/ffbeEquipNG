import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";
import {common} from "../common";
import {ContextService, Server} from "../services/context.service";

import {constants} from '../model/constants';

@Component({
  selector: 'app-item-tile',
  templateUrl: './item-tile.component.html',
  styleUrls: ['./item-tile.component.css', '../../assets/css-img/equipments.css', '../../assets/css-img/elements.css']
})
export class ItemTileComponent implements OnInit {

  @Input() item:any;

  itemIcon:string;
  itemIconClass:string;
  itemTypeIconClass:string;
  baseStats = constants.BASE_STATS;
  itemElements:string[];
  elementResists: any[] = [];
  ailmentResists: any[] = [];
  specials:any[] = [];


  constructor(private contextService:ContextService) { }

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

    if (this.item.special.includes('dualWield')) {
      this.specials.push({'name':'Dual Wield', 'icon':'ability_72.png'});
    }
    if (this.item.partialDualWield) {
      this.specials.push({'name':'Dual Wield', 'icon':'ability_72.png', 'text':' of '}); // TODO
    }
    /*if (item.allowUseOf) {
      special += "<li>Allow use of <i class='img img-equipment-" + item.allowUseOf + " inline'></i></li>";
    }
    if (item.evade) {
      if (item.evade.physical) {
        special += "<li>Evade physical attacks " + item.evade.physical + "%</li>";
      }
      if (item.evade.magical) {
        special += "<li>Evade magical attacks " + item.evade.magical + "%</li>";
      }
    }
    if (item.singleWielding) {
      for (var index in baseStats) {
        if (item.singleWielding[baseStats[index]]) {
          special += "<li>Increase equipment " + baseStats[index].toUpperCase() + " (" + item.singleWielding[baseStats[index]] + "%) when single wielding</li>";
        }
      }
    }
    if (item.singleWieldingOneHanded) {
      for (var index in baseStats) {
        if (item.singleWieldingOneHanded[baseStats[index]]) {
          special += "<li>Increase equipment " + baseStats[index].toUpperCase() + " (" + item.singleWieldingOneHanded[baseStats[index]] + "%) when single wielding a one-handed weapon</li>";
        }
      }
    }
    if (item.dualWielding) {
      for (var index in baseStats) {
        if (item.dualWielding[baseStats[index]]) {
          special += "<li>Increase equipment " + baseStats[index].toUpperCase() + " (" + item.dualWielding[baseStats[index]] + "%) when dual wielding</li>";
        }
      }
    }

    if (item.accuracy) {
      special += "<li>Increase Accuracy (" + item.accuracy + "%)</li>";
    }
    if (item.singleWielding && item.singleWielding.accuracy) {
      special += "<li>Increase Accuracy (" + item.singleWielding.accuracy + "%) when single wielding</li>";
    }
    if (item.singleWieldingOneHanded && item.singleWieldingOneHanded.accuracy) {
      special += "<li>Increase Accuracy (" + item.singleWieldingOneHanded.accuracy + "%) when single wielding a one-handed wreapon</li>";
    }
    if (item.damageVariance) {
      special += "<li>Damage variance from x" + item.damageVariance.min + " to x"  + item.damageVariance.max + " (average : x" + (item.damageVariance.min + item.damageVariance.max)/2 + ")</li>";
    }
    if (item.mpRefresh) {
      special += "<li>Recover MP (" + item.mpRefresh + "%) per turn</li>";
    }
    if (item.jumpDamage) {
      special += "<li>Increase damage dealt by jump attacks by "+ item.jumpDamage + "%</li>";
    }
    if (item.lbFillRate) {
      special += "<li>Increase LB gauge fill rate (" + item.lbFillRate + "%)</li>";
    }
    if (item.lbDamage) {
      special += "<li>Increase LB damage (+" + item.lbDamage + "%)</li>";
    }
    if (item.lbPerTurn) {
      var value;
      if (item.lbPerTurn.min == item.lbPerTurn.max) {
        value = item.lbPerTurn.min;
      } else {
        value = item.lbPerTurn.min + "-" + item.lbPerTurn.max;
      }
      special += "<li>Increase LB gauge each turn (" + value + ")</li>";
    }
    if (item.evoMag) {
      special += "<li>Increase Esper summon damage by "+ item.evoMag + "%</li>";
    }
    if (item.esperStatsBonus) {
      special += "<li>Increase esper's bonus stats ("+ item.esperStatsBonus.hp + "%)</li>";
    }
    if (item.special) {
      special += getSpecialHtml(item);
    }*/

  }



}
