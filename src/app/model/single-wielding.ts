import {StatValues} from "./stat-values";
import {constants} from "./constants";

export class SingleWielding extends StatValues {
  public static STATS = constants.BASE_STATS.concat(["accuracy"]);
  accuracy: number = 0;

  static fromJson(valueByStat): SingleWielding {
    let result: SingleWielding;
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
