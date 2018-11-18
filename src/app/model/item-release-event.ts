import {Item} from "./item";

export class ItemReleaseEvent {
  constructor(public name:string, public items:Item[]) {}
}
