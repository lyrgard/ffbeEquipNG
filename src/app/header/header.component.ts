import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loading:boolean = true;

  constructor(private loggingService:LoginService) {}

  ngOnInit() {
    this.loggingService.getLoggingState().subscribe(() => this.loading = false);
  }

}
