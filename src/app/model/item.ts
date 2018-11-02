import {constants} from "./constants";

export class ValuesByStat {
  hp:number = 0;
  mp:number = 0;
  atk:number = 0;
  def:number = 0;
  mag:number = 0;
  spr:number = 0;

  static fromJson(valueByStat):ValuesByStat {
    let result: ValuesByStat;
    if (valueByStat) {
      result = new ValuesByStat();
      result.hp = valueByStat.hp || 0;
      result.mp = valueByStat.mp || 0;
      result.atk = valueByStat.atk || 0;
      result.def = valueByStat.def || 0;
      result.mag = valueByStat.mag || 0;
      result.spr = valueByStat.spr || 0;
    }
    return result;
  }
}

export class SingleWielding extends ValuesByStat {
  public static STATS = constants.BASE_STATS.concat(["accuracy"]);
  accuracy:number = 0;

  static fromJson(valueByStat):SingleWielding {
    let result:SingleWielding;
    if (valueByStat) {
      result = new SingleWielding();
      result.hp = valueByStat.hp || 0;
      result.mp = valueByStat.mp || 0;
      result.atk = valueByStat.atk || 0;
      result.def = valueByStat.def || 0;
      result.mag = valueByStat.mag || 0;
      result.spr = valueByStat.spr || 0;
      result.accuracy = valueByStat.accuracy || 0;
    }
    return result;
  }
}

export class MinMax {
  min:number;
  max:number;

  static fromJson(minMax):MinMax {
    let result:MinMax;
    if (minMax) {
      result = new MinMax();
      result.min = minMax.min || 0;
      result.max = minMax.max || 0;
    }
    return result;
  }
}

export class BaseValue {
  constructor(flat = 0, percent = 0) {
    this.flat = flat;
    this.percent = percent;
  }
  flat:number;
  percent:number;
}

export class Item {
  id:string;
  name:string;
  jpname:string;
  wikientry:string;
  type:string;
  hp:BaseValue;
  mp:BaseValue;
  atk:BaseValue;
  def:BaseValue;
  mag:BaseValue;
  spr:BaseValue;
  evoMag:number;
  physicalEvade:number;
  magicalEvade:number;
  singleWieldingOneHanded:SingleWielding;
  singleWielding:SingleWielding;
  dualWielding:ValuesByStat;
  accuracy:number;
  damageVariance:MinMax;
  jumpDamage:number;
  lbFillRate:number;
  lbPerTurn:MinMax;
  elements:string[];
  partialDualWield:string[];
  elementalResists:Map<string, number> = new Map<string, number>();
  ailmentResists:Map<string, number> = new Map<string, number>();
  ailments:Map<string, number> = new Map<string, number>();
  physicalKillers:Map<string, number> = new Map<string, number>();
  magicalKillers:Map<string, number> = new Map<string, number>();
  mpRefresh:number;
  esperStatsBonus:ValuesByStat;
  lbDamage:number;
  skillEnhancement:Map<string, number> = new Map<string, number>();
  special: string[];
  allowUseOf:string;
  exclusiveSex:string;
  exclusiveUnits:string[];
  equipedConditions:string[];
  tmrUnit:string;
  stmrUnit:string;
  maxNumber:number;
  eventName:string
  notStackableSkills:Map<string, any> = new Map<string, any>();
  access:string[];
  icon:string;
  sortId:number;
  rarity:number;
  dualWield:boolean = false;
  notStackable:boolean = false;
  twoHanded:boolean = false;
  searchText:string = "";
  calculatedValue:number;

  constructor(json:any, units:any) {
    if (json) {
      this.id = json.id;
      this.name = json.name;
      this.jpname = json.jpname;
      this.wikientry = json.wikientry;
      this.type = json.type;
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
      this.dualWielding = ValuesByStat.fromJson(json.dualWielding);
      this.accuracy = json.accuracy || 0;
      this.damageVariance = MinMax.fromJson(json.damageVariance);
      this.jumpDamage = json.jumpDamage || 0;
      this.lbFillRate = json.lbFillRate || 0;
      this.lbPerTurn = MinMax.fromJson(json.lbPerTurn);
      this.elements = json.element || [];
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
      this.esperStatsBonus = ValuesByStat.fromJson(json.esperStatsBonus);
      this.lbDamage = json.lbDamage;
      if (json.skillEnhancement) {
        Object.keys(json.skillEnhancement).forEach(skillId => this.skillEnhancement.set(skillId, json.skillEnhancement[skillId]));
      }
      this.special = [];
      if (json.special) {
        json.special.forEach(s => {
          if (s === "dualWield") {
            this.dualWield = true;
          } else if (s === "twoHanded") {
            this.twoHanded = true;
          } else if (s === "notStackable") {
            this.notStackable = true;
          } else {
            this.special.push(s);
          }
        })
      }
      this.allowUseOf = json.allowUseOf;
      this.exclusiveSex = json.exclusiveSex;
      this.exclusiveUnits = json.exclusiveUnits || [];
      this.equipedConditions = json.equipedConditions || [];
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
      calculatedValue = this.physicalEvade;
      if (this.magicalEvade > this.physicalEvade) {
        calculatedValue = this.magicalEvade;
      }
    } else if (stat == 'inflict') {
      var maxValue = 0;
      this.ailments.forEach((value, ailment) => {
        if ((ailments.length == 0 || ailments.includes(ailment)) && value > maxValue) {
          maxValue = value;
        }
      });
      this.physicalKillers.forEach((value, killer) => {
        if ((killers.length == 0 || killers.includes(killer) && value > maxValue)) {
          maxValue = value
        }
      });
      this.magicalKillers.forEach((value, killer) => {
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
        this.ailmentResists.forEach((value, ailment) => {
          if (ailments.length == 0 || ailments.includes(ailment) && value > maxValue) {
            maxValue = value;
          }
        });
      }
      if (!ignoreElements) {
        this.elementalResists.forEach((value, element) => {
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
    let textToSearch = this.name;

    if (this.jpname) {
      textToSearch += this.jpname;
    }
    if (this.physicalEvade) {
      textToSearch += `|+${this.physicalEvade}% physical evasion`;
    }
    if (this.magicalEvade) {
      textToSearch += `|+${this.magicalEvade}% magical evasion`;
    }
    this.ailmentResists.forEach((value, ailment) => textToSearch += "|" + ailment);
    this.elementalResists.forEach((value, element) => textToSearch += "|" + element);
    this.elements.forEach(element => textToSearch += "|" + element);
    this.ailments.forEach((value, ailment) => textToSearch += "|" + ailment);
    if (this.exclusiveUnits.length > 0) {
      textToSearch += "|Only ";
      this.exclusiveUnits.forEach(unitId => {
        if (units[unitId]) {
          textToSearch += units[unitId].name + ", ";
        }
      });
    }
    if (this.exclusiveSex) {
      textToSearch += "|Only " + this.exclusiveSex;
    }
    if (this.mpRefresh) {
      textToSearch += `|Recover MP (" ${this.mpRefresh}%) per turn`;
    }
    if (this.special.length > 0) {
      for (let i = 0, len = this.special.length; i < len;i++) {
        textToSearch += "|" + this.special[i];
      }
    }
    if (this.singleWielding) {
      SingleWielding.STATS.forEach(stat => {
        if (this.singleWielding[stat]) {
          if (stat == "accuracy") {
            textToSearch += `|+${this.singleWielding.accuracy}% accuracy when single wielding`;
          } else {
            textToSearch += `|+${this.singleWielding[stat]}% equipment ${stat.toUpperCase()} when single wielding`;
          }
        }
      })
    }
    if (this.singleWieldingOneHanded) {
      SingleWielding.STATS.forEach(stat => {
        if (this.singleWieldingOneHanded[stat]) {
          if (stat == "accuracy") {
            textToSearch += `|+${this.singleWieldingOneHanded.accuracy}% accuracy when single wielding a one-handed weapon`;
          } else {
            textToSearch += `|+${this.singleWieldingOneHanded[stat]}% equipment ${stat.toUpperCase()} when single wielding a one-handed weapon`;
          }
        }
      })
    }
    if (this.dualWielding) {
      constants.BASE_STATS.forEach(stat => {
        if (this.dualWielding[stat]) {
          textToSearch += `|+${this.dualWielding[stat]}% equipment ${stat.toUpperCase()} when dual wielding`;
        }
      })
    }
    this.physicalKillers.forEach((value, killer) => {
      textToSearch += `|physical killer ${killer}`;
    })
    this.magicalKillers.forEach((value, killer) => {
      textToSearch += `|physical killer ${killer}`;
    })
    if (this.accuracy) {
      textToSearch += `|+${this.accuracy}% accuracy`;
    }

    if (this.jumpDamage) {
      textToSearch += `|+${this.jumpDamage}% jump damage`;
    }
    if (this.lbDamage) {
      textToSearch += `|+${this.lbDamage}% LB damage`;
    }
    if (this.lbFillRate) {
      textToSearch += `|+${this.lbFillRate}% LB fill rate`;
    }
    if (this.lbPerTurn) {
      textToSearch += `+${this.lbPerTurn.min}-${this.lbPerTurn.max} LB gauge per turn`;
    }
    if (this.evoMag) {
      textToSearch += `|+${this.evoMag}% Esper summon damage`;
    }
    if (this.esperStatsBonus) {
      textToSearch += `|+${this.esperStatsBonus.hp}% stats from espers`;
    }
    if (this.tmrUnit && units[this.tmrUnit]) {
      textToSearch += "|" + units[this.tmrUnit].name;
    }
    if (this.stmrUnit && units[this.stmrUnit]) {
      textToSearch += "|" + units[this.stmrUnit].name;
    }
    for (let index in this.access) {
      textToSearch += "|" + this.access[index];
    }
    if (this.partialDualWield) {
      textToSearch += "|partial dual wield";
      for (let i = 0, len = this.partialDualWield.length; i < len;i++) {
        textToSearch += " " + this.partialDualWield[i];
      }
    }
    this.searchText = textToSearch;
  }
}
