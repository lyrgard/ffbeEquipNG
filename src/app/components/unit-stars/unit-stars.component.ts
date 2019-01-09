import {Component, Input, OnInit} from '@angular/core';
import {Unit} from "../../model/unit";

@Component({
  selector: 'app-unit-stars',
  templateUrl: './unit-stars.component.html',
  styleUrls: ['./unit-stars.component.css']
})
export class UnitStarsComponent implements OnInit {

  @Input() minRarity:number;
  @Input() maxRarity:number;

  output:string;

  constructor() { }

  ngOnInit() {
    this.output = "";
    for (let i = 0; i < this.minRarity; i++) {
      this.output += "★";
    }
    for (let i = 0; i < this.maxRarity - this.minRarity; i++) {
      this.output += "☆";
    }
  }

}
