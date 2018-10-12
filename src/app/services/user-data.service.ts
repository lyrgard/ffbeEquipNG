import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ContextService} from "./context.service";
import {tap} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  units:BehaviorSubject<any> = new BehaviorSubject<any>({});
  itemInventory:BehaviorSubject<any> = new BehaviorSubject<any>({});
  espers:BehaviorSubject<any> = new BehaviorSubject<any>({});
  settings:BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor(private http:HttpClient, private context: ContextService) { }

  getUserData():Observable<any> {

    return this.http.get<any>(`${environment.baseUrl}/${this.context.server}/userData`).pipe(tap(data => {
      this.units.next(data["units"]);
      this.itemInventory.next(data["itemInventory"]);
      this.espers.next(data["espers"]);
      this.settings.next(data["settings"]);
    }));
  }
}
