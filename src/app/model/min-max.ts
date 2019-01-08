export class MinMax {
  min: number;
  max: number;

  static fromJson(minMax): MinMax {
    let result: MinMax;
    if (minMax) {
      result = new MinMax();
      result.min = minMax.min || 0;
      result.max = minMax.max || 0;
    }
    return result;
  }
}
