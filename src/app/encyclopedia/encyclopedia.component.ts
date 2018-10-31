import { Component, OnInit } from '@angular/core';
import {SearchFilter} from './search-filter';
import {ContextService, Pages} from '../services/context.service';
import {StaticDataService} from "../services/static-data.service";
import {FormControl} from "@angular/forms";
import {SiteStateService} from "../services/site-state.service";
import {constants} from "../model/constants";

@Component({
  selector: 'app-encyclopedia',
  templateUrl: './encyclopedia.component.html',
  styleUrls: ['./encyclopedia.component.css']
})
export class EncyclopediaComponent implements OnInit {

  searchFilter: SearchFilter;
  $items:any[];
  $filteredItems:any[];
  sortStats = constants.BASE_STATS.concat(["evade", "inflict", "resist"]);
  equipmentTypeList = constants.EQUIPMENT_TYPE_LIST;
  elementList = constants.ELEMENT_LIST.concat(["noElement"]);
  ailmentList = constants.AILMENT_LIST;

  constructor(private contextService: ContextService, private staticDataService: StaticDataService, private siteState:SiteStateService) {
    this.searchFilter = siteState.encyclopediaSearchFilter;
  }

  ngOnInit() {
      this.contextService.setCurrentPage(Pages.ENCYCLOPEDIA);
      this.staticDataService.getItems().subscribe(items => {
        this.$items = items;
        this.applyFilter();
      });
      this.searchFilter.onChange.subscribe(() => this.applyFilter());
  }

  applyFilter() {
    if (this.searchFilter.isEmpty()) {
      this.$filteredItems = [];.
    } else {
      this.$filteredItems = this.$items.filter(item => this.searchFilter.isSelected(item));
    }
  }
}
