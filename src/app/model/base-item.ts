import {constants} from "./constants";
import {Item} from "./item";
import {PassiveEffect} from "./passive-effect";
import {BasePassiveEffect} from "./base-passive-effect";
import {SingleWielding} from "./single-wielding";

export class BaseItem implements Item {
  id:string;
  name:string;
  jpname:string;
  wikiEntry:string;
  type:string;
  readonly effect:PassiveEffect;
  accuracy:number;
  elements:string[];
  special: string[];
  exclusiveSex:string;
  exclusiveUnits:string[];
  tmrUnit:string;
  stmrUnit:string;
  maxNumber:number;
  eventName:string
  notStackableSkills:Map<string, any> = new Map<string, any>();
  access:string[];
  icon:string;
  sortId:number;
  rarity:number;
  notStackable:boolean = false;
  twoHanded:boolean = false;
  fullSearchText:string = "";
  nameAndTmrunitSearchText:string = "";
  calculatedValue:number;

  constructor(json:any, units:any) {
    if (json) {
      this.id = json.id;
      this.name = json.name;
      this.jpname = json.jpname;
      this.wikiEntry = json.wikiEntry;
      this.type = json.type;
      this.effect = new BasePassiveEffect(json);

      this.accuracy = json.accuracy || 0;
      this.elements = json.element || [];
      this.special = [];
      if (json.special) {
        json.special.forEach(s => {
          if (s === "dualWield") {
          } else if (s === "twoHanded") {
            this.twoHanded = true;
          } else if (s === "notStackable") {
            this.notStackable = true;
          } else {
            this.special.push(s);
          }
        })
      }
      this.exclusiveSex = json.exclusiveSex;
      this.exclusiveUnits = json.exclusiveUnits || [];
      this.tmrUnit = json.tmrUnit;
      this.stmrUnit = json.stmrUnit;
      this.maxNumber = json.maxNumber || 9999;
      this.eventName = json.eventName;
      if (json.notStackableSkills) {
        Object.keys(json.notStackableSkills).forEach(skillId => this.notStackableSkills.set(skillId, json.notStackableSkills[skillId]));
      }
      this.access = json.access;
      this.icon = json.icon;
      this.sortId = json.sortId;
      this.rarity = json.rarity;
      this.prepareSearch(units);
    }
  }

  isWeapon() {
    return constants.WEAPON_TYPES.includes(this.type);
  }

  public calculateSortValue(baseStat, stat, ailments, elements, killers):number {
    let calculatedValue = 0;
    if (constants.BASE_STATS.includes(stat)) {
      calculatedValue = this[stat].flat + this[stat].percent * baseStat / 100;
    } else if (stat == "evade") {
      calculatedValue = this.effect.physicalEvade;
      if (this.effect.magicalEvade > this.effect.physicalEvade) {
        calculatedValue = this.effect.magicalEvade;
      }
    } else if (stat == 'inflict') {
      var maxValue = 0;
      this.effect.ailments.forEach((value, ailment) => {
        if ((ailments.length == 0 || ailments.includes(ailment)) && value > maxValue) {
          maxValue = value;
        }
      });
      this.effect.physicalKillers.forEach((value, killer) => {
        if ((killers.length == 0 || killers.includes(killer) && value > maxValue)) {
          maxValue = value
        }
      });
      this.effect.magicalKillers.forEach((value, killer) => {
        if ((killers.length == 0 || killers.includes(killer) && value > maxValue)) {
          maxValue = value
        }
      });
      calculatedValue = maxValue;
    } else if (stat == 'resist') {
      var maxValue = -999;
      var ignoreAilments = elements.length > 0 && ailments.length == 0;
      var ignoreElements = ailments.length > 0 && elements.length == 0;
      if (!ignoreAilments) {
        this.effect.ailmentResists.forEach((value, ailment) => {
          if (ailments.length == 0 || ailments.includes(ailment) && value > maxValue) {
            maxValue = value;
          }
        });
      }
      if (!ignoreElements) {
        this.effect.elementalResists.forEach((value, element) => {
          if (elements.length == 0 || elements.includes(element) && value > maxValue) {
            maxValue = value;
          }
        });
      }
      calculatedValue = maxValue;
      if (calculatedValue == -999) {
        calculatedValue = 0;
      }
    }
    this.calculatedValue = calculatedValue;
    return calculatedValue;
  };

  private prepareSearch(units:any) {
    let fullSearchText = this.name;
    let nameAndTmrunitSearchText = this.name;

    if (this.jpname) {
      fullSearchText += `|${this.jpname}`;
      nameAndTmrunitSearchText += `|${this.jpname}`;
    }
    if (this.effect.physicalEvade) {
      fullSearchText += `|+${this.effect.physicalEvade}% physical evasion`;
    }
    if (this.effect.magicalEvade) {
      fullSearchText += `|+${this.effect.magicalEvade}% magical evasion`;
    }
    this.effect.ailmentResists.forEach((value, ailment) => fullSearchText += "|" + ailment);
    this.effect.elementalResists.forEach((value, element) => fullSearchText += "|" + element);
    this.elements.forEach(element => fullSearchText += "|" + element);
    this.effect.ailments.forEach((value, ailment) => fullSearchText += "|" + ailment);
    if (this.exclusiveUnits.length > 0) {
      fullSearchText += "|Only ";
      this.exclusiveUnits.forEach(unitId => {
        if (units[unitId]) {
          fullSearchText += units[unitId].name + ", ";
        }
      });
    }
    if (this.exclusiveSex) {
      fullSearchText += "|Only " + this.exclusiveSex;
    }
    if (this.effect.mpRefresh) {
      fullSearchText += `|Recover MP (" ${this.effect.mpRefresh}%) per turn`;
    }
    if (this.special.length > 0) {
      for (let i = 0, len = this.special.length; i < len;i++) {
        fullSearchText += "|" + this.special[i];
      }
    }
    if (this.effect.singleWielding) {
      SingleWielding.STATS.forEach(stat => {
        if (this.effect.singleWielding[stat]) {
          if (stat == "accuracy") {
            fullSearchText += `|+${this.effect.singleWielding.accuracy}% accuracy when single wielding`;
          } else {
            fullSearchText += `|+${this.effect.singleWielding[stat]}% equipment ${stat.toUpperCase()} when single wielding`;
          }
        }
      })
    }
    if (this.effect.singleWieldingOneHanded) {
      SingleWielding.STATS.forEach(stat => {
        if (this.effect.singleWieldingOneHanded[stat]) {
          if (stat == "accuracy") {
            fullSearchText += `|+${this.effect.singleWieldingOneHanded.accuracy}% accuracy when single wielding a one-handed weapon`;
          } else {
            fullSearchText += `|+${this.effect.singleWieldingOneHanded[stat]}% equipment ${stat.toUpperCase()} when single wielding a one-handed weapon`;
          }
        }
      })
    }
    if (this.effect.dualWielding) {
      constants.BASE_STATS.forEach(stat => {
        if (this.effect.dualWielding[stat]) {
          fullSearchText += `|+${this.effect.dualWielding[stat]}% equipment ${stat.toUpperCase()} when dual wielding`;
        }
      })
    }
    this.effect.physicalKillers.forEach((value, killer) => {
      fullSearchText += `|physical killer ${killer}`;
    })
    this.effect.magicalKillers.forEach((value, killer) => {
      fullSearchText += `|physical killer ${killer}`;
    })
    if (this.accuracy) {
      fullSearchText += `|+${this.accuracy}% accuracy`;
    }

    if (this.effect.jumpDamage) {
      fullSearchText += `|+${this.effect.jumpDamage}% jump damage`;
    }
    if (this.effect.lbDamage) {
      fullSearchText += `|+${this.effect.lbDamage}% LB damage`;
    }
    if (this.effect.lbFillRate) {
      fullSearchText += `|+${this.effect.lbFillRate}% LB fill rate`;
    }
    if (this.effect.lbPerTurn) {
      fullSearchText += `+${this.effect.lbPerTurn.min}-${this.effect.lbPerTurn.max} LB gauge per turn`;
    }
    if (this.effect.evoMag) {
      fullSearchText += `|+${this.effect.evoMag}% Esper summon damage`;
    }
    if (this.effect.esperStatsBonus) {
      fullSearchText += `|+${this.effect.esperStatsBonus.hp}% stats from espers`;
    }
    if (this.tmrUnit && units[this.tmrUnit]) {
      fullSearchText += "|" + units[this.tmrUnit].name;
      nameAndTmrunitSearchText += "|" + units[this.tmrUnit].name;
    }
    if (this.stmrUnit && units[this.stmrUnit]) {
      fullSearchText += "|" + units[this.stmrUnit].name;
      nameAndTmrunitSearchText += "|" + units[this.stmrUnit].name;
    }
    for (let index in this.access) {
      fullSearchText += "|" + this.access[index];
    }
    if (this.effect.partialDualWield) {
      fullSearchText += "|partial dual wield";
      for (let i = 0, len = this.effect.partialDualWield.length; i < len;i++) {
        fullSearchText += " " + this.effect.partialDualWield[i];
      }
    }
    this.fullSearchText = fullSearchText;
    this.nameAndTmrunitSearchText = nameAndTmrunitSearchText;
  }

  isNotReleasedYet() {
    return this.access.includes("not released yet");
  }
}
