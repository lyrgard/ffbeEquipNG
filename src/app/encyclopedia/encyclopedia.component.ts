import { Component, OnInit } from '@angular/core';
import {SearchFilter} from './search-filter';
import {ContextService, Pages} from '../services/context.service';

@Component({
  selector: 'app-encyclopedia',
  templateUrl: './encyclopedia.component.html',
  styleUrls: ['./encyclopedia.component.css']
})
export class EncyclopediaComponent implements OnInit {

  searchFilter: SearchFilter = new SearchFilter();

  constructor(private contextService: ContextService) { }

  ngOnInit() {
      this.contextService.setCurrentPage(Pages.ENCYCLOPEDIA);
  }

}
