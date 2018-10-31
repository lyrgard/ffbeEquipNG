import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-filter-selector',
  templateUrl: './filter-selector.component.html',
  styleUrls: ['./filter-selector.component.css', '../../assets/css-img/sorts.css', '../../assets/css-img/equipments.css', '../../assets/css-img/elements.css', '../../assets/css-img/ailments.css']
})
export class FilterSelectorComponent implements OnInit {

  @Input() values:string[];
  @Input() cssType:string;
  @Input() multipleChoice:boolean = true;
  @Input() filterData:any;
  @Input() filterName:string;

  public radioGroupForm: FormGroup;
  public checkboxGroupForm: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    if (!this.multipleChoice) {
      this.radioGroupForm = this.formBuilder.group({
        'value': this.filterData[this.filterName]
      });
      this.radioGroupForm.valueChanges.subscribe(() => this.filterData[this.filterName] = this.radioGroupForm.value['value']);
    } else {
      let controlsConfig = {};
      this.values.forEach(value => controlsConfig[value] = this.filterData[this.filterName].includes(value));

      this.checkboxGroupForm = this.formBuilder.group(controlsConfig);
      this.checkboxGroupForm.valueChanges.subscribe(value => {
        this.filterData[this.filterName] = Object.keys(value).filter(key => value[key]);
      })
    }
  }
}
