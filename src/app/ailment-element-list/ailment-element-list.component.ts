import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ailment-element-list',
  templateUrl: './ailment-element-list.component.html',
  styleUrls: ['./ailment-element-list.component.css', '../../assets/css-img/elements.css', '../../assets/css-img/ailments.css']
})
export class AilmentElementListComponent implements OnInit {

  @Input() list: {name:string, percent:number}[];
  @Input() type:string;
  values: number[] = [];
  namesByValues:Map<number, string[]> = new Map<number, string[]>();

  constructor() { }

  ngOnInit() {
    this.list.forEach(element => {
      if (!this.values.includes(element.percent)) {
        this.values.push(element.percent);
        this.namesByValues.set(element.percent, []);
      }
      this.namesByValues.get(element.percent).push(element.name);
    });
    this.values.sort((a, b) => b -a)
  }

}
