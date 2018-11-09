import { Component, OnInit } from '@angular/core';
import {ContextService, Pages} from "../services/context.service";

@Component({
  selector: 'app-unit-collection',
  templateUrl: './unit-collection.component.html',
  styleUrls: ['./unit-collection.component.css']
})
export class UnitCollectionComponent implements OnInit {

  constructor(private contextService: ContextService) { }

  ngOnInit() {
    this.contextService.setCurrentPage(Pages.UNIT_COLLECTION);
  }

}
