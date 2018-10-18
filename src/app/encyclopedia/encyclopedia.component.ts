import { Component, OnInit } from '@angular/core';
import {SearchFilter} from "./search-filter";

@Component({
  selector: 'app-encyclopedia',
  templateUrl: './encyclopedia.component.html',
  styleUrls: ['./encyclopedia.component.css']
})
export class EncyclopediaComponent implements OnInit {

  searchFilter:SearchFilter = new SearchFilter();

  constructor() { }

  ngOnInit() {
  }

}
