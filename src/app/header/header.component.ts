import { Component, OnInit } from '@angular/core';
import {LoginService, LoggingState} from "../services/login.service";
import {UserDataService} from "../services/user-data.service";
import {ContextService, Language, Pages, Server} from "../services/context.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './languages.css']
})
export class HeaderComponent implements OnInit {

  Server = Server;
  Language = Language;
  Pages = Pages;
  $language:Language;
  $server:Server;
  $page:Pages;
  LoggingState = LoggingState;
  loggingState:LoggingState = LoggingState.LOADING;
  itemCount = 0;
  unitCount = 0;


  constructor(private loggingService:LoginService, private userData: UserDataService, private contextService:ContextService) {}

  ngOnInit() {
    this.contextService.server.subscribe(server => this.$server = server);
    this.contextService.language.subscribe(language => this.$language = language);
    this.contextService.currentPage.subscribe(page => {
      this.$page = page;
      console.log(page)
    });
    this.loggingService.getLoggingState().subscribe(
      state => this.loggingState = state
    );
    this.userData.units.subscribe(units => {
      this.unitCount = Object.keys(units).length;
    });
    this.userData.itemInventory.subscribe(items => {
      this.itemCount = Object.keys(items).length;
    });
  }

  logIn(): void {
    this.loggingService.login();
  }

  logOut(): void {
    this.loggingService.logout();
  }

}
