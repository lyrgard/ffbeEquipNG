import {Component, Input, OnInit} from '@angular/core';
import {Unit} from "../../model/unit";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-unit-tile',
  templateUrl: './unit-tile.component.html',
  styleUrls: ['./unit-tile.component.css']
})
export class UnitTileComponent implements OnInit {

  @Input() unit:Unit;

  unitIcon:string;

  constructor() { }

  ngOnInit() {
    this.unitIcon = `${environment.baseUrl}img/units/unit_icon_${this.unit.id}.png`;
  }

}
