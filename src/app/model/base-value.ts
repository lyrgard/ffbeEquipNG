export class BaseValue {
  constructor(flat = 0, percent = 0) {
    this.flat = flat;
    this._percent = percent;
  }

  flat: number;
  protected _percent: number;


  get percent(): number {
    return this._percent;
  }

  set percent(value: number) {
    this._percent = value;
  }
}
