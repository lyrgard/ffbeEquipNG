import {Item} from "./item";
import {SingleWielding} from "./single-wielding";
import {itemWorldConstants} from "./item-world-constants";
import {constants} from "./constants";
import {StatValues} from "./stat-values";
import {PassiveEffect} from "./passive-effect";
import {MinMax} from "./min-max";
import {BaseValue} from "./base-value";

export class EnhancedBaseValue extends BaseValue {
  enhancement:number = 0;
  constructor(flat, percent) {
    super(flat, percent);
  }
  get percent() {
    return this._percent + this.enhancement;
  }
}

export class EnhancedPassiveEffect implements PassiveEffect {
  baseEffect: PassiveEffect;
  enhancements:string[] = [];
  enhancedFillRate = 0;
  enhanced_hp: EnhancedBaseValue;
  enhanced_mp: EnhancedBaseValue;
  enhanced_atk: EnhancedBaseValue;
  enhanced_def: EnhancedBaseValue;
  enhanced_mag: EnhancedBaseValue;
  enhanced_spr: EnhancedBaseValue;


  constructor(passiveEffect: PassiveEffect, itemType:string, enhancements:string[]) {
    this.baseEffect = passiveEffect;
    this.enhanced_hp = new EnhancedBaseValue(passiveEffect.hp.flat, passiveEffect.hp.percent);
    this.enhanced_mp = new EnhancedBaseValue(passiveEffect.mp.flat, passiveEffect.mp.percent);
    this.enhanced_atk = new EnhancedBaseValue(passiveEffect.atk.flat, passiveEffect.atk.percent);
    this.enhanced_def = new EnhancedBaseValue(passiveEffect.def.flat, passiveEffect.def.percent);
    this.enhanced_mag = new EnhancedBaseValue(passiveEffect.mag.flat, passiveEffect.mag.percent);
    this.enhanced_spr = new EnhancedBaseValue(passiveEffect.spr.flat, passiveEffect.spr.percent);
    enhancements.forEach(e => this.toggleEnhancement(e, itemType));
  }

  toggleEnhancement(enhancement:string, itemType:string) {
    if (this.enhancements.includes(enhancement)) {
      this.enhancements.splice(this.enhancements.indexOf(enhancement), 1);
      let ability;
      if (enhancement.startsWith("rare")) {
        ability = itemWorldConstants.ITEM_ENHANCEMENT_ABILITIES[enhancement][itemType];
      } else {
        ability = itemWorldConstants.ITEM_ENHANCEMENT_ABILITIES[enhancement];
      }
      if (ability.lbFillRate) {
        this.enhancedFillRate -= ability.lbFillRate;
      }
      constants.BASE_STATS.forEach(stat => {
        if (ability[stat + '%']) {
          this['enhanced_' + stat].enhancement -= ability[stat + '%'];
        }
      });
      return true;
    } else if (this.enhancements.length < 3) {
      if (!enhancement.startsWith("rare") || !this.enhancements.some(e => e.startsWith("rare"))) {
        this.enhancements.push(enhancement);
        let ability;
        if (enhancement.startsWith("rare")) {
          ability = itemWorldConstants.ITEM_ENHANCEMENT_ABILITIES[enhancement][itemType];
        } else {
          ability = itemWorldConstants.ITEM_ENHANCEMENT_ABILITIES[enhancement];
        }
        if (ability.lbFillRate) {
          this.enhancedFillRate += ability.lbFillRate;
        }
        constants.BASE_STATS.forEach(stat => {
          if (ability[stat + '%']) {
            this['enhanced_' + stat].enhancement += ability[stat + '%'];
          }
        });
        return true;
      }
    }
    return false;
  }

  get hp():BaseValue { return this.enhanced_hp }
  get mp():BaseValue { return this.enhanced_mp }
  get atk():BaseValue { return this.enhanced_atk }
  get def():BaseValue { return this.enhanced_def }
  get mag():BaseValue { return this.enhanced_mag }
  get spr():BaseValue { return this.enhanced_spr }
  get evoMag():number { return this.baseEffect.evoMag }
  get physicalEvade():number { return this.baseEffect.physicalEvade }
  get magicalEvade():number { return this.baseEffect.magicalEvade }
  get singleWieldingOneHanded():SingleWielding { return this.baseEffect.singleWieldingOneHanded }
  get singleWielding():SingleWielding { return this.baseEffect.singleWielding }
  get dualWielding():StatValues { return this.baseEffect.dualWielding }
  get damageVariance():MinMax { return this.baseEffect.damageVariance }
  get jumpDamage():number { return this.baseEffect.jumpDamage }
  get lbFillRate():number { return this.baseEffect.lbFillRate + this.enhancedFillRate }
  get lbPerTurn():MinMax { return this.baseEffect.lbPerTurn }
  get partialDualWield():string[] { return this.baseEffect.partialDualWield }
  get elementalResists():Map<string, number> { return this.baseEffect.elementalResists }
  get ailmentResists():Map<string, number> { return this.baseEffect.ailmentResists }
  get ailments():Map<string, number> { return this.baseEffect.ailments }
  get physicalKillers():Map<string, number> { return this.baseEffect.physicalKillers }
  get magicalKillers():Map<string, number> { return this.baseEffect.magicalKillers }
  get mpRefresh():number { return this.baseEffect.mpRefresh }
  get esperStatsBonus():StatValues { return this.baseEffect.esperStatsBonus }
  get lbDamage():number { return this.baseEffect.lbDamage }
  get skillEnhancement():Map<string, number> { return this.baseEffect.skillEnhancement }
  get allowUseOf():string { return this.baseEffect.allowUseOf }
  get equipedConditions():string[] { return this.baseEffect.equipedConditions }
  get dualWield():boolean { return this.baseEffect.dualWield }


}
