import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatRipple} from '@angular/material';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnChanges {

  @Input() value:number;
  @Input() denominator:number;
  @ViewChild(MatRipple) ripple: MatRipple;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value.currentValue != changes.value.previousValue) {
      this.ripple.launch({
        centered: true
      })
    }
  }

}
