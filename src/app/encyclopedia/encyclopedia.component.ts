import { Component, OnInit } from '@angular/core';
import {SearchFilter} from './search-filter';
import {ContextService, Pages} from '../services/context.service';
import {StaticDataService} from "../services/static-data.service";
import {FormControl} from "@angular/forms";
import {SiteStateService} from "../services/site-state.service";
import {constants} from "../model/constants";
import {Item} from "../model/item";
import {SortService} from "../services/sort.service";
import {ActivatedRoute} from "@angular/router";
import {LoggingState, LoginService} from "../services/login.service";

@Component({
  selector: 'app-encyclopedia',
  templateUrl: './encyclopedia.component.html',
  styleUrls: ['./encyclopedia.component.css']
})
export class EncyclopediaComponent implements OnInit {

  LoggingState = LoggingState;
  loggingState: LoggingState = LoggingState.LOADING;
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
  hash:string;

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

  constructor(private contextService: ContextService, private staticDataService: StaticDataService, private siteState:SiteStateService, private sortService:SortService, private route:ActivatedRoute, private loginService:LoginService) {
    this.searchFilter = siteState.encyclopediaSearchFilter;
    loginService.getLoggingState().subscribe(
      state => this.loggingState = state
    );
  }

  ngOnInit() {
      this.contextService.setCurrentPage(Pages.ENCYCLOPEDIA);
      this.staticDataService.getItems().subscribe(items => {
        this.$items = items;
        this.applyFilter();
      });
      this.searchFilter.onChange.subscribe(() => this.applyFilter());
      if (this.route.snapshot.fragment != "") {
        this.searchFilter.fromHashString(this.route.snapshot.fragment);
      }
  }

  applyFilter() {
    if (this.searchFilter.isEmpty()) {
      window.location.hash = "";
      this.$filteredItems = [];
    } else {
      window.location.hash = this.searchFilter.toHashString();
      let baseStat = 180;
      if (this.searchFilter.sort == "hp") {
        baseStat = 4000;
      } else if (this.searchFilter.sort == "mp") {
        baseStat = 300;
      }
      this.$filteredItems = this.sortService.sort(this.$items.filter(item => this.searchFilter.isSelected(item)),baseStat, this.searchFilter.sort, this.searchFilter.ailments, this.searchFilter.elements, []);
    }
  }
}
