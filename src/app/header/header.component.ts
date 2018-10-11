import { Component, OnInit } from '@angular/core';
import {LoginService, LoggingState} from "../services/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  LoggingState = LoggingState;
  loggingState:LoggingState = LoggingState.LOADING;

  constructor(private loggingService:LoginService) {}

  ngOnInit() {
    this.loggingService.getLoggingState().subscribe(
      state => this.loggingState = state
    );
  }

}
