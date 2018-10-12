import { Component, OnInit } from '@angular/core';
import {LoginService, LoggingState} from "../services/login.service";
import {UserDataService} from "../services/user-data.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  LoggingState = LoggingState;
  loggingState:LoggingState = LoggingState.LOADING;
  itemCount = 0;
  unitCount = 0;

  constructor(private loggingService:LoginService, private userData: UserDataService) {}

  ngOnInit() {
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
