import {SingleWielding} from "./single-wielding";
import {StatValues} from "./stat-values";
import {MinMax} from "./min-max";
import {BaseValue} from "./base-value";

export interface PassiveEffect {
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
  readonly damageVariance:MinMax;
  readonly jumpDamage:number;
  readonly lbFillRate:number;
  readonly lbPerTurn:MinMax;
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
  readonly allowUseOf:string;
  readonly equipedConditions:string[];
  readonly dualWield:boolean;
}
