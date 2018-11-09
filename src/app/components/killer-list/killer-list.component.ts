import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-killer-list',
  templateUrl: './killer-list.component.html',
  styleUrls: ['./killer-list.component.css', '../../../assets/css-img/killers.css']
})
export class KillerListComponent implements OnInit {

  @Input() killers:Map<string, number>;
  @Input() killerType:string;

  values:number[] = [];
  killersByValue:Map<number,string[]> = new Map<number, string[]>();

  constructor() { }

  ngOnInit() {
    this.killers.forEach((value, killer) => {
      if (!this.values.includes(value)) {
        this.values.push(value);
        this.killersByValue.set(value, []);
      }
      this.killersByValue.get(value).push(killer);

    });
    this.values.sort((a, b) => b - a);
  }

}
