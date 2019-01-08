import {Item} from "./item";
import {EnhancedPassiveEffect} from "./enhanced-passive-effect";
import {PassiveEffect} from "./passive-effect";
import {constants} from "./constants";

export class EnhancedItem implements Item {
  readonly item:Item;
  readonly enhancedEffect:EnhancedPassiveEffect;
  calculatedValue:number;

  constructor(item:Item, enhancements:string[]) {
    this.item = item;
    this.enhancedEffect = new EnhancedPassiveEffect(item.effect, item.type, enhancements);
  }

  get id():string{ return this.item.id };
  get name():string{ return this.item.name };
  get jpname():string{ return this.item.jpname };
  get wikiEntry():string{ return this.item.wikiEntry };
  get type():string{ return this.item.type };
  get effect():PassiveEffect { return this.enhancedEffect};
  get accuracy():number{ return this.item.accuracy };
  get elements():string[]{ return this.item.elements };
  get special(): string[]{ return this.item.special };
  get exclusiveSex():string{ return this.item.exclusiveSex };
  get exclusiveUnits():string[]{ return this.item.exclusiveUnits };
  get tmrUnit():string{ return this.item.tmrUnit };
  get stmrUnit():string{ return this.item.stmrUnit };
  get maxNumber():number{ return this.item.maxNumber };
  get eventName():string {return this.item.eventName}
  get notStackableSkills():Map<string, any>{ return this.item.notStackableSkills };
  get access():string[]{ return this.item.access };
  get icon():string{ return this.item.icon };
  get sortId():number{ return this.item.sortId };
  get rarity():number{ return this.item.rarity };
  get notStackable():boolean{ return this.item.notStackable };
  get twoHanded():boolean{ return this.item.twoHanded };
  get fullSearchText():string{ return this.item.fullSearchText };
  get nameAndTmrunitSearchText():string{ return this.item.nameAndTmrunitSearchText };
  get enhancements():string[] {return this.enhancedEffect.enhancements};


  isWeapon() {
    return this.item.isWeapon();
  }

  isNotReleasedYet() {
    return this.item.isNotReleasedYet();
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

  toggleEnhancement(enhancement:string) {
    this.enhancedEffect.toggleEnhancement(enhancement, this.item.type);
  }
}
