import {Component, Input, OnInit} from '@angular/core';
import {ContextService, Server} from "../services/context.service";
import {common} from "../common";

@Component({
  selector: 'app-item-link',
  templateUrl: './item-link.component.html',
  styleUrls: ['./item-link.component.css']
})
export class ItemLinkComponent implements OnInit {

  @Input() item:any;

  itemLink:string;

  constructor(private contextService:ContextService) { }

  ngOnInit() {
    this.contextService.server.subscribe(server => {
      if (server == Server.GL) {
        this.itemLink = common.toUrl(this.item);
      }
    });
  }

}
