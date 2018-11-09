import { Component, OnInit } from '@angular/core';
import {ContextService, Pages} from "../services/context.service";

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  constructor(private contextService: ContextService) { }

  ngOnInit() {
    this.contextService.setCurrentPage(Pages.BUILDER);
  }

}
