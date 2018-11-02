import { Component, OnInit } from '@angular/core';
import {SearchFilter} from './search-filter';
import {ContextService, Pages} from '../services/context.service';
import {StaticDataService} from "../services/static-data.service";
import {FormControl} from "@angular/forms";
import {SiteStateService} from "../services/site-state.service";
import {constants} from "../model/constants";
import {Item} from "../model/item";
import {SortService} from "../services/sort.service";

@Component({
  selector: 'app-encyclopedia',
  templateUrl: './encyclopedia.component.html',
  styleUrls: ['./encyclopedia.component.css']
})
export class EncyclopediaComponent implements OnInit {

  searchFilter: SearchFilter;
  $items:Item[];
  $filteredItems:any[];
  sortStats = constants.BASE_STATS.concat(["evade", "inflict", "resist"]);
  equipmentTypeList = constants.EQUIPMENT_TYPE_LIST;
  elementList = constants.ELEMENT_LIST.concat(["noElement"]);
  ailmentList = constants.AILMENT_LIST;
  killerList = constants.RACE_LIST;
  stats = constants.BASE_STATS;
  physicalKillerTooltipProvider= (killer:string) => {
    return `${killer.charAt(0).toUpperCase() + killer.slice(1)} physical killer`;
  };
  magicalKillerTooltipProvider= (killer:string) => {
    return `${killer.charAt(0).toUpperCase() + killer.slice(1)} magical killer`;
  };

  accessList = [
    { icon: 'shop', value: 'shop', tooltip: 'items from town shops' },
    { icon: 'story', value: 'chest/quest', tooltip: 'items from story chests and quests' },
    { icon: 'key', value: 'key', tooltip: 'items obtained with vault keys' },
    { icon: 'colosseum', value: 'colosseum', tooltip: 'items obtained in the Colosseum' },
    { icon: 'tmr_1-2stars', value: 'TMR-1*/TMR-2*', tooltip: 'TMR of 1★ or 2★ base units' },
    { icon: 'tmr_3-4stars', value: 'TMR-3*/TMR-4*', tooltip: 'TMR of 3★ or 4★ base units' },
    { icon: 'tmr_5stars', value: 'TMR-5*', tooltip: 'TMR of 5★ base units' },
    { icon: 'stmr', value: 'STMR', tooltip: 'Super TMR of 7★ units' },
    { icon: 'event', value: 'event', tooltip: 'items from event rewards' },
    { icon: 'recipe', value: 'recipe', tooltip: 'items crafted from recipes' },
    { icon: 'trophy', value: 'trophy', tooltip: 'items earned from trophy achievements' },
    { icon: 'chocobo', value: 'chocobo', tooltip: 'items exchanged with fat chocobo or mother chocobo' },
    { icon: 'trial', value: 'trial', tooltip: 'items from trial rewards' },
    { icon: 'unitExclusive', value: 'unitExclusive', tooltip: 'items having an ability exclusive to a specific unit' },
    { icon: 'premium', value: 'premium', tooltip: 'items from premium (paid) bundles' }
  ];

  constructor(private contextService: ContextService, private staticDataService: StaticDataService, private siteState:SiteStateService, private sortService:SortService) {
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
      this.$filteredItems = [];
    } else {
      this.$filteredItems = this.sortService.sort(this.$items.filter(item => this.searchFilter.isSelected(item)),0, this.searchFilter.sort, this.searchFilter.ailments, this.searchFilter.elements, []);
    }
  }
}
