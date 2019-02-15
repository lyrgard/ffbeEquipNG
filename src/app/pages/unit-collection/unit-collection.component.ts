import { Component, OnInit } from '@angular/core';
import {ContextService, Pages} from "../../services/context.service";
import {UnitReleaseDay} from "../../model/unit-release-day";
import {StaticDataService} from "../../services/static-data.service";
import {environment} from "../../../environments/environment";
import {UserDataService} from "../../services/user-data.service";
import {Item} from "../../model/item";

@Component({
  selector: 'app-unit-collection',
  templateUrl: './unit-collection.component.html',
  styleUrls: ['./unit-collection.component.css']
})
export class UnitCollectionComponent implements OnInit {

  $units:any[];
  $unitHistory:UnitReleaseDay[];
  $filteredHistory:UnitReleaseDay[];
  $ownedUnits:any;
  $ownedItems:any;
  $ownedTmrNumberByUnitId:Map<String, number> = new Map();
  $totalTmrNumberByUnitId:Map<String, number> = new Map();
  currentPageHistory:number = 0;
  environment = environment;

  constructor(private contextService: ContextService,
              private staticDataService:StaticDataService,
              private userDataService:UserDataService) { }

  ngOnInit() {
    this.contextService.setCurrentPage(Pages.UNIT_COLLECTION);
    this.staticDataService.getUnitHistory().subscribe(unitHistory => {
      this.$unitHistory = unitHistory;
      this.changePageHistory(0);
    });
    this.userDataService.units.subscribe(ownedUnits => {
      if (ownedUnits && Object.keys(ownedUnits).length > 0) {
        this.$ownedUnits = ownedUnits;
        this.userDataService.itemInventory.subscribe(ownedItems => {
          if (ownedItems && Object.keys(ownedItems).length > 0) {
            this.staticDataService.getTmrByUnitId().subscribe(tmrByUnitId => {
              Object.keys(ownedUnits).forEach(unitId => {
                let tmr = tmrByUnitId.get(unitId);
                if (tmr) {
                  let ownedTmrData = ownedItems[tmr.id];
                  if (ownedTmrData) {
                    this.$ownedTmrNumberByUnitId.set(unitId, ownedTmrData);
                    this.$totalTmrNumberByUnitId.set(unitId, ownedTmrData + ownedUnits[unitId].farmable);
                  }
                }
              });
            });
          }
        });
      } else {
        this.$ownedUnits = null;
      }
    });

  }

  changePageHistory(page) {
    this.currentPageHistory = page;
    this.$filteredHistory = this.$unitHistory.slice(this.currentPageHistory * 5, this.currentPageHistory * 5 + 5);
  }

  farmedThisTMR(unitId:number) {

  }

  openMoreActions(unitId:number) {

  }

  addUnit(unitId:number) {

  }

  removeUnit(unitId:number) {

  }
}
