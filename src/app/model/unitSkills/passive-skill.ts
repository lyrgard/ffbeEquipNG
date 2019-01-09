import {PassiveEffect} from "../passive-effect";
import {BasePassiveEffect} from "../base-passive-effect";

export class PassiveSkill {
  readonly name:string;
  readonly id:string;
  readonly icon:string;
  readonly effects:PassiveEffect[] = [];

  constructor(passiveEffect:any) {
    this.name = passiveEffect.name;
    this.id = passiveEffect.id;
    this.icon = passiveEffect.icon;
    if (passiveEffect.effects) {
      passiveEffect.effects.forEach(pe => {
        this.effects.push(new BasePassiveEffect(pe));
      })
    }
  }
}
