export class StatValues {
  hp: number = 0;
  mp: number = 0;
  atk: number = 0;
  def: number = 0;
  mag: number = 0;
  spr: number = 0;

  static fromJson(valueByStat): StatValues {
    let result: StatValues;
    if (valueByStat) {
      result = new StatValues();
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
