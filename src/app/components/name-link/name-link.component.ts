import {Component, Input, OnInit} from '@angular/core';
import {ContextService, Server} from "../../services/context.service";
import {common} from "../../common";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-item-link',
  templateUrl: './name-link.component.html',
  styleUrls: ['./name-link.component.css']
})
export class ItemLinkComponent implements OnInit {

  @Input() name:string;
  @Input() wikiEntry:string;
  @Input() icon:string;

  itemLink:string;
  iconUrl:string;

  constructor(private contextService:ContextService) { }

  ngOnInit() {
    this.contextService.server.subscribe(server => {
      if (server == Server.GL) {
        this.itemLink = common.toUrl(this.name, this.wikiEntry);
      }
    });

    if (this.icon) {
      this.iconUrl = `${environment.baseUrl}img/items/${this.icon}`;
    }
  }

}
