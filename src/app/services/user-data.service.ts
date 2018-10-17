import { Injectable } from '@angular/core';
import {AsyncSubject, BehaviorSubject, Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ContextService} from "./context.service";
import {map, tap, flatMap} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  units:BehaviorSubject<any> = new BehaviorSubject<any>({});
  itemInventory:BehaviorSubject<any> = new BehaviorSubject<any>({});
  espers:BehaviorSubject<any> = new BehaviorSubject<any>({});
  settings:BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor(private http:HttpClient, private context: ContextService) { }

  getUserData():AsyncSubject<any> {

    let result:AsyncSubject<boolean> = new AsyncSubject<boolean>();
    this.context.server.subscribe(server => {
      this.http.get<any>(`${environment.baseUrl}/${server}/userData`).subscribe(
        data => {
          this.units.next(data["units"]);
          this.itemInventory.next(data["itemInventory"]);
          this.espers.next(data["espers"]);
          this.settings.next(data["settings"]);

          result.next(true);
          result.complete();
        },
        e => {
          result.next(false);
          result.complete();
        });
    });

    return result;
  }
}
