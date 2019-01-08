export enum EffectArea {
  AOE = 'AOE',
  ST = 'ST',
  SELF = 'SELF',
  RANDOM = 'RND'
}

export enum EffectTarget {
  ENEMY = 'ENEMY',
  ALLY = 'ALLY',
  ALLY_BUT_SELF = 'ALLY_BUT_SELF',
  SELF = 'SELF',
}

export class ActiveEffect {
  readonly effectArea:EffectArea;
  readonly effectTarget:EffectTarget;
  readonly description:string;

  constructor(effect:any) {
    this.description = effect.desc;
    this.effectArea = <EffectArea>EffectArea[effect.effect.area];
    this.effectTarget = <EffectTarget>EffectTarget[effect.effect.target];
  }
}
