import {constants} from "./constants";
import {SingleWielding} from "./single-wielding";
import {StatValues} from "./stat-values";
import {PassiveEffect} from "./passive-effect";
import {MinMax} from "./min-max";
import {BaseValue} from "./base-value";

export interface Item {
  readonly id:string;
  readonly name:string;
  readonly jpname:string;
  readonly wikiEntry:string;
  readonly type:string;
  readonly effect:PassiveEffect;
  readonly accuracy:number;
  readonly elements:string[];
  readonly special: string[];
  readonly exclusiveSex:string;
  readonly exclusiveUnits:string[];
  readonly tmrUnit:string;
  readonly stmrUnit:string;
  readonly maxNumber:number;
  readonly eventName:string
  readonly notStackableSkills:Map<string, any>;
  readonly access:string[];
  readonly icon:string;
  readonly sortId:number;
  readonly rarity:number;
  readonly notStackable:boolean;
  readonly twoHanded:boolean;
  readonly fullSearchText:string;
  readonly nameAndTmrunitSearchText:string;
  readonly calculatedValue:number;

  isWeapon():boolean;

  calculateSortValue(baseStat, stat, ailments, elements, killers):number;

  isNotReleasedYet();
}
