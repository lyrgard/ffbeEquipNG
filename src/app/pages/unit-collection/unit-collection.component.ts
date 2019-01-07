import { Component, OnInit } from '@angular/core';
import {ContextService, Pages} from "../../services/context.service";
import {UnitReleaseDay} from "../../model/unit-release-day";
import {StaticDataService} from "../../services/static-data.service";

@Component({
  selector: 'app-unit-collection',
  templateUrl: './unit-collection.component.html',
  styleUrls: ['./unit-collection.component.css']
})
export class UnitCollectionComponent implements OnInit {

  $units:any[];
  $unitHistory:UnitReleaseDay[];
  $filteredHistory:UnitReleaseDay[];
  currentPageHistory:number = 0;

  constructor(private contextService: ContextService,
              private staticDataService:StaticDataService,) { }

  ngOnInit() {
    this.contextService.setCurrentPage(Pages.UNIT_COLLECTION);
    this.staticDataService.getUnitHistory().subscribe(unitHistory => {
      this.$unitHistory = unitHistory;
      this.changePageHistory(0);
    });
  }

  changePageHistory(page) {
    this.currentPageHistory = page;
    this.$filteredHistory = this.$unitHistory.slice(this.currentPageHistory * 5, this.currentPageHistory * 5 + 5);
  }
}
