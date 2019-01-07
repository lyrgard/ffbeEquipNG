import {constants} from "./constants";
import {BaseValue, MinMax, SingleWielding} from "./base-item";
import {StatValues} from "./stat-values";

export interface Item {
  readonly id:string;
  readonly name:string;
  readonly jpname:string;
  readonly wikientry:string;
  readonly type:string;
  readonly hp:BaseValue;
  readonly mp:BaseValue;
  readonly atk:BaseValue;
  readonly def:BaseValue;
  readonly mag:BaseValue;
  readonly spr:BaseValue;
  readonly evoMag:number;
  readonly physicalEvade:number;
  readonly magicalEvade:number;
  readonly singleWieldingOneHanded:SingleWielding;
  readonly singleWielding:SingleWielding;
  readonly dualWielding:StatValues;
  readonly accuracy:number;
  readonly damageVariance:MinMax;
  readonly jumpDamage:number;
  readonly lbFillRate:number;
  readonly lbPerTurn:MinMax;
  readonly elements:string[];
  readonly partialDualWield:string[];
  readonly elementalResists:Map<string, number>;
  readonly ailmentResists:Map<string, number>;
  readonly ailments:Map<string, number>;
  readonly physicalKillers:Map<string, number>;
  readonly magicalKillers:Map<string, number>;
  readonly mpRefresh:number;
  readonly esperStatsBonus:StatValues;
  readonly lbDamage:number;
  readonly skillEnhancement:Map<string, number>;
  readonly special: string[];
  readonly allowUseOf:string;
  readonly exclusiveSex:string;
  readonly exclusiveUnits:string[];
  readonly equipedConditions:string[];
  readonly tmrUnit:string;
  readonly stmrUnit:string;
  readonly maxNumber:number;
  readonly eventName:string
  readonly notStackableSkills:Map<string, any>;
  readonly access:string[];
  readonly icon:string;
  readonly sortId:number;
  readonly rarity:number;
  readonly dualWield:boolean;
  readonly notStackable:boolean;
  readonly twoHanded:boolean;
  readonly fullSearchText:string;
  readonly nameAndTmrunitSearchText:string;
  readonly calculatedValue:number;

  isWeapon():boolean;

  calculateSortValue(baseStat, stat, ailments, elements, killers):number;

  isNotReleasedYet();
}
