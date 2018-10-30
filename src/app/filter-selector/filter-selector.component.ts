import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-filter-selector',
  templateUrl: './filter-selector.component.html',
  styleUrls: ['./filter-selector.component.css', '../../assets/css-img/sorts.css', '../../assets/css-img/equipments.css', '../../assets/css-img/elements.css', '../../assets/css-img/ailments.css']
})
export class FilterSelectorComponent implements OnInit {

  @Input() values:string[];
  @Input() cssType:string;
  @Input() multipleChoice:boolean = true;

  selectedValue:string;

  constructor() { }

  ngOnInit() {
  }

}
