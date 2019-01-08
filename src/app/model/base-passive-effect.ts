import {SingleWielding} from "./single-wielding";
import {StatValues} from "./stat-values";
import {constants} from "./constants";
import {PassiveEffect} from "./passive-effect";
import {MinMax} from "./min-max";
import {BaseValue} from "./base-value";

export class BasePassiveEffect implements PassiveEffect {
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
  readonly elementalResists:Map<string, number> = new Map<string, number>();
  readonly ailmentResists:Map<string, number> = new Map<string, number>();
  readonly ailments:Map<string, number> = new Map<string, number>();
  readonly physicalKillers:Map<string, number> = new Map<string, number>();
  readonly magicalKillers:Map<string, number> = new Map<string, number>();
  readonly mpRefresh:number;
  readonly esperStatsBonus:StatValues;
  readonly lbDamage:number;
  readonly skillEnhancement:Map<string, number> = new Map<string, number>();
  readonly allowUseOf:string;
  readonly equipedConditions:string[];
  readonly dualWield:boolean;

  constructor(json:any) {
    if (json) {
      this.hp = new BaseValue(json.hp, json['hp%']);
      this.mp = new BaseValue(json.mp, json['mp%']);
      this.atk = new BaseValue(json.atk, json['atk%']);
      this.def = new BaseValue(json.def, json['def%']);
      this.mag = new BaseValue(json.mag, json['mag%']);
      this.spr = new BaseValue(json.spr, json['spr%']);
      this.evoMag = json.evoMag;
      if (json.evade) {
        this.physicalEvade = json.evade.physical || 0;
        this.magicalEvade= json.evade.magical || 0;
      }
      this.singleWieldingOneHanded = SingleWielding.fromJson(json.singleWieldingOneHanded);
      this.singleWielding = SingleWielding.fromJson(json.singleWielding);
      this.dualWielding = StatValues.fromJson(json.dualWielding);
      this.damageVariance = MinMax.fromJson(json.damageVariance);
      this.jumpDamage = json.jumpDamage || 0;
      this.lbFillRate = json.lbFillRate || 0;
      this.lbPerTurn = MinMax.fromJson(json.lbPerTurn);
      this.partialDualWield = json.partialDualWield || [];
      if (json.resist) {
        json.resist.forEach(r => {
          if (constants.ELEMENT_LIST.includes(r.name)) {
            this.elementalResists.set(r.name, r.percent);
          } else {
            this.ailmentResists.set(r.name, r.percent);
          }
        });
      }
      if (json.ailments) {
        json.ailments.forEach(a => this.ailments.set(a.name, a.percent));
      }
      if (json.killers) {
        json.killers.forEach(k => {
          if (k.physical) {
            this.physicalKillers.set(k.name, k.physical);
          }
          if (k.magical) {
            this.physicalKillers.set(k.name, k.magical);
          }
        })
      }
      this.mpRefresh = json.mpRefresh || 0;
      this.esperStatsBonus = StatValues.fromJson(json.esperStatsBonus);
      this.lbDamage = json.lbDamage;
      if (json.skillEnhancement) {
        Object.keys(json.skillEnhancement).forEach(skillId => this.skillEnhancement.set(skillId, json.skillEnhancement[skillId]));
      }
      this.allowUseOf = json.allowUseOf;
      this.equipedConditions = json.equipedConditions || [];
    }
  }
}
