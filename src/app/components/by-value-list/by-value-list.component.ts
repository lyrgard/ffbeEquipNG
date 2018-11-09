import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-by-value-list',
  templateUrl: './by-value-list.component.html',
  styleUrls: ['./by-value-list.component.css', '../../../assets/css-img/elements.css', '../../../assets/css-img/ailments.css', '../../../assets/css-img/killers.css']
})
export class ByValueListComponent implements OnInit {

  @Input() list: Map<string, number>;
  @Input() type:string;
  values: number[] = [];
  namesByValues:Map<number, string[]> = new Map<number, string[]>();

  constructor() { }

  ngOnInit() {
    if (this.list) {
      this.list.forEach((value, killer) => {
        if (!this.values.includes(value)) {
          this.values.push(value);
          this.namesByValues.set(value, []);
        }
        this.namesByValues.get(value).push(killer);

      });
      this.values.sort((a, b) => b - a);
    }
  }

}
