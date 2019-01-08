import {ActiveEffect} from "./active-effect";

export enum DamageMechanism {
  physical = 'physical',
  magical = 'magical',
  hybrid = 'hybrid',
  fixed = 'fixed'
}

export enum DamageType {
  mind = 'mind',
  body = 'body'
}

export class DamageEffect extends ActiveEffect {
  readonly mechanism:DamageMechanism;
  readonly type:DamageType;
  readonly coef:number;
}
