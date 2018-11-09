import { Component, OnInit } from '@angular/core';
import {ContextService, Pages} from "../services/context.service";

@Component({
  selector: 'app-unit-search',
  templateUrl: './unit-search.component.html',
  styleUrls: ['./unit-search.component.css']
})
export class UnitSearchComponent implements OnInit {

  constructor(private contextService: ContextService) { }

  ngOnInit() {
    this.contextService.setCurrentPage(Pages.UNIT_SEARCH);
  }

}
