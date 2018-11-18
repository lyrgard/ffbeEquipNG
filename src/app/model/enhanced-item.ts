import {Item} from "./item";
import {BaseItem, BaseValue, MinMax, SingleWielding, ValuesByStat} from "./base-item";
import {itemWorldConstants} from "./item-world-constants";
import {constants} from "./constants";

export class EnhancedBaseValue extends BaseValue {
  enhancement:number = 0;
  constructor(flat, percent) {
    super(flat, percent);
  }
  get percent() {
    return this._percent + this.enhancement;
  }
}

export class EnhancedItem implements Item {
  baseItem: Item;
  enhancements:string[] = [];
  enhancedFillRate = 0;
  enhanced_hp: EnhancedBaseValue;
  enhanced_mp: EnhancedBaseValue;
  enhanced_atk: EnhancedBaseValue;
  enhanced_def: EnhancedBaseValue;
  enhanced_mag: EnhancedBaseValue;
  enhanced_spr: EnhancedBaseValue;


  constructor(item:Item, enhancements:string[]) {
    this.baseItem = item;
    this.enhanced_hp = new EnhancedBaseValue(item.hp.flat, item.hp.percent);
    this.enhanced_mp = new EnhancedBaseValue(item.mp.flat, item.mp.percent);
    this.enhanced_atk = new EnhancedBaseValue(item.atk.flat, item.atk.percent);
    this.enhanced_def = new EnhancedBaseValue(item.def.flat, item.def.percent);
    this.enhanced_mag = new EnhancedBaseValue(item.mag.flat, item.mag.percent);
    this.enhanced_spr = new EnhancedBaseValue(item.spr.flat, item.spr.percent);
    enhancements.forEach(e => this.toggleEnhancement(e));
  }

  toggleEnhancement(enhancement:string) {
    if (this.enhancements.includes(enhancement)) {
      this.enhancements.splice(this.enhancements.indexOf(enhancement), 1);
      let ability;
      if (enhancement.startsWith("rare")) {
        ability = itemWorldConstants.ITEM_ENHANCEMENT_ABILITIES[enhancement][this.baseItem.type];
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
          ability = itemWorldConstants.ITEM_ENHANCEMENT_ABILITIES[enhancement][this.baseItem.type];
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

  get id():string { return this.baseItem.id }
  get name():string { return this.baseItem.name }
  get jpname():string { return this.baseItem.jpname }
  get wikientry():string { return this.baseItem.wikientry }
  get type():string { return this.baseItem.type }
  get hp():BaseValue { return this.enhanced_hp }
  get mp():BaseValue { return this.enhanced_mp }
  get atk():BaseValue { return this.enhanced_atk }
  get def():BaseValue { return this.enhanced_def }
  get mag():BaseValue { return this.enhanced_mag }
  get spr():BaseValue { return this.enhanced_spr }
  get evoMag():number { return this.baseItem.evoMag }
  get physicalEvade():number { return this.baseItem.physicalEvade }
  get magicalEvade():number { return this.baseItem.magicalEvade }
  get singleWieldingOneHanded():SingleWielding { return this.baseItem.singleWieldingOneHanded }
  get singleWielding():SingleWielding { return this.baseItem.singleWielding }
  get dualWielding():ValuesByStat { return this.baseItem.dualWielding }
  get accuracy():number { return this.baseItem.accuracy }
  get damageVariance():MinMax { return this.baseItem.damageVariance }
  get jumpDamage():number { return this.baseItem.jumpDamage }
  get lbFillRate():number { return this.baseItem.lbFillRate + this.enhancedFillRate }
  get lbPerTurn():MinMax { return this.baseItem.lbPerTurn }
  get elements():string[] { return this.baseItem.elements }
  get partialDualWield():string[] { return this.baseItem.partialDualWield }
  get elementalResists():Map<string, number> { return this.baseItem.elementalResists }
  get ailmentResists():Map<string, number> { return this.baseItem.ailmentResists }
  get ailments():Map<string, number> { return this.baseItem.ailments }
  get physicalKillers():Map<string, number> { return this.baseItem.physicalKillers }
  get magicalKillers():Map<string, number> { return this.baseItem.magicalKillers }
  get mpRefresh():number { return this.baseItem.mpRefresh }
  get esperStatsBonus():ValuesByStat { return this.baseItem.esperStatsBonus }
  get lbDamage():number { return this.baseItem.lbDamage }
  get skillEnhancement():Map<string, number> { return this.baseItem.skillEnhancement }
  get special(): string[] { return this.baseItem.special }
  get allowUseOf():string { return this.baseItem.allowUseOf }
  get exclusiveSex():string { return this.baseItem.exclusiveSex }
  get exclusiveUnits():string[] { return this.baseItem.exclusiveUnits }
  get equipedConditions():string[] { return this.baseItem.equipedConditions }
  get tmrUnit():string { return this.baseItem.tmrUnit }
  get stmrUnit():string { return this.baseItem.stmrUnit }
  get maxNumber():number { return this.baseItem.maxNumber }
  get eventName():string { return this.baseItem.eventName }
  get notStackableSkills():Map<string, any> { return this.baseItem.notStackableSkills }
  get access():string[] { return this.baseItem.access }
  get icon():string { return this.baseItem.icon }
  get sortId():number { return this.baseItem.sortId }
  get rarity():number { return this.baseItem.rarity }
  get dualWield():boolean { return this.baseItem.dualWield }
  get notStackable():boolean { return this.baseItem.notStackable }
  get twoHanded():boolean { return this.baseItem.twoHanded }
  get fullSearchText():string { return this.baseItem.fullSearchText }
  get nameAndTmrunitSearchText():string { return this.baseItem.nameAndTmrunitSearchText }
  get calculatedValue():number { return this.baseItem.calculatedValue }

  calculateSortValue():number {return this.baseItem.calculatedValue}
  isWeapon():boolean {return this.baseItem.isWeapon()}
  isNotReleasedYet():boolean {return this.baseItem.isNotReleasedYet()}
}
