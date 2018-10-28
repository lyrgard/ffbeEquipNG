import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-killer-list',
  templateUrl: './killer-list.component.html',
  styleUrls: ['./killer-list.component.css', '../../assets/css-img/killers.css']
})
export class KillerListComponent implements OnInit {

  @Input() killers:{name:string, physical:number|null, magical:number|null}[];

  physicalValues:number[] = [];
  magicalValues:number[] = [];
  physicalKillersByValue:Map<number,string[]> = new Map<number, string[]>();
  magicalKillersByValue:Map<number,string[]> = new Map<number, string[]>();

  constructor() { }

  ngOnInit() {
    this.killers.forEach(killer => {
      if (killer.physical) {
        if (!this.physicalValues.includes(killer.physical)) {
          this.physicalValues.push(killer.physical);
          this.physicalKillersByValue.set(killer.physical, []);
        }
        this.physicalKillersByValue.get(killer.physical).push(killer.name);
      }
      if (killer.magical) {
        if (!this.magicalValues.includes(killer.magical)) {
          this.magicalValues.push(killer.magical);
          this.magicalKillersByValue.set(killer.magical, []);
        }
        this.magicalKillersByValue.get(killer.magical).push(killer.name);
      }
    });
    this.physicalValues.sort((a, b) => b - a);
    this.magicalValues.sort((a, b) => b - a);
  }

}
