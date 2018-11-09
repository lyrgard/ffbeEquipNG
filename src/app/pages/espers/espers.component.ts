import { Component, OnInit } from '@angular/core';
import {ContextService, Pages} from "../../services/context.service";

@Component({
  selector: 'app-espers',
  templateUrl: './espers.component.html',
  styleUrls: ['./espers.component.css']
})
export class EspersComponent implements OnInit {

  constructor(private contextService: ContextService) { }

  ngOnInit() {
    this.contextService.setCurrentPage(Pages.ESPERS);
  }

}
