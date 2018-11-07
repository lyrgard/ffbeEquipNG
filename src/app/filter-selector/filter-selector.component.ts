import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SearchFilter} from "../encyclopedia/search-filter";

@Component({
  selector: 'app-filter-selector',
  templateUrl: './filter-selector.component.html',
  styleUrls: [
    './filter-selector.component.css',
    '../../assets/css-img/sorts.css',
    '../../assets/css-img/equipments.css',
    '../../assets/css-img/elements.css',
    '../../assets/css-img/ailments.css',
    '../../assets/css-img/killers.css',
    '../../assets/css-img/stats.css',
    '../../assets/css-img/access.css']
})
export class FilterSelectorComponent implements OnInit {

  @Input() values:string[];
  @Input() cssType:string;
  @Input() multipleChoice:boolean = true;
  @Input() filterData:SearchFilter;
  @Input() filterName:string;
  @Input() valuesWithIcons:{icon:string, value:string, tooltip:string}[];
  @Input() tooltipProvider:(string) => string = (value) => "";

  public radioGroupForm: FormGroup;
  public checkboxGroupForm: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    if (this.values) {
      this.valuesWithIcons = [];
      this.values.forEach(value => this.valuesWithIcons.push({icon:value, 'value':value, tooltip:this.tooltipProvider(value)}));
    }
    if (!this.multipleChoice) {
      this.radioGroupForm = this.formBuilder.group({
        'value': this.filterData[this.filterName]
      });
      this.radioGroupForm.valueChanges.subscribe(() => this.filterData[this.filterName] = this.radioGroupForm.value['value']);
    } else {
      let controlsConfig = {};
      this.valuesWithIcons.forEach(iconValue => controlsConfig[iconValue.value] = this.filterData[this.filterName].includes(iconValue.value));

      this.checkboxGroupForm = this.formBuilder.group(controlsConfig);
      this.checkboxGroupForm.valueChanges.subscribe(value => {
        this.filterData[this.filterName] = Object.keys(value).filter(key => value[key]);
      })
    }
    this.filterData.onChange.subscribe(() => {
      if (this.multipleChoice) {
        let newValue = {};
        this.valuesWithIcons.forEach(iconValue => newValue[iconValue.value] = this.filterData[this.filterName].includes(iconValue.value));
        this.checkboxGroupForm.setValue(newValue);
      } else {
        this.radioGroupForm.setValue({'value': this.filterData[this.filterName]});
      }
    });
  }
}
