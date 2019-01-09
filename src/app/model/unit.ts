import {StatValues} from "./stat-values";
import {until} from "selenium-webdriver";
import {PassiveSkill} from "./unitSkills/passive-skill";

export enum Sex {
  male ="male",
  female ="female",
  other ="other"
}

export class Unit {
  readonly id:string;
  readonly name:string;
  readonly jpname:string;
  readonly minRarity:number;
  readonly maxRarity:number;
  readonly sex:Sex;
  readonly minStats:StatValues;
  readonly maxStats:StatValues;
  readonly pots:StatValues;
  readonly statGrowPattern:number;
  readonly equip:string[];
  readonly enhancementSkills:string[];
  readonly passives:PassiveSkill[] = [];

  constructor(unit:any) {
    this.id = unit.id;
    this.name = unit.name;
    this.jpname = unit.jpname;
    this.minRarity = unit.min_rarity;
    this.maxRarity = unit.max_rarity;
    this.sex = <Sex>Sex[unit.sex];
    this.minStats = StatValues.fromJson(unit.stats.minStats);
    this.maxStats = StatValues.fromJson(unit.stats.maxStats);
    this.pots = StatValues.fromJson(unit.stats.pots);
    this.statGrowPattern = unit.stats_pattern;
    this.equip = unit.equip;
    if (unit.passives) {
      unit.passives.forEach(p => this.passives.push(new PassiveSkill(p)));
    }
  }
}
