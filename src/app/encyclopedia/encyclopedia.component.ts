import { Component, OnInit } from '@angular/core';
import {SearchFilter} from './search-filter';
import {ContextService, Pages} from '../services/context.service';
import {StaticDataService} from "../services/static-data.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-encyclopedia',
  templateUrl: './encyclopedia.component.html',
  styleUrls: ['./encyclopedia.component.css']
})
export class EncyclopediaComponent implements OnInit {

  searchTextFormControl = FormControl;
  searchFilter: SearchFilter = new SearchFilter();
  $items:any[];
  $filteredItems:any[];

  constructor(private contextService: ContextService, private staticDataService: StaticDataService) { }

  ngOnInit() {
      this.contextService.setCurrentPage(Pages.ENCYCLOPEDIA);
      this.staticDataService.getItems().subscribe(items => {
        this.$items = items;
        this.applyFilter();
      });
      this.searchFilter.onChange.subscribe(() => this.applyFilter());
  }

  applyFilter() {
    this.$filteredItems = this.$items.filter(item => this.searchFilter.isSelected(item));
  }
}
