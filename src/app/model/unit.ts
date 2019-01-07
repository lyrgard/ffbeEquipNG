import {StatValues} from "./stat-values";

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
}
