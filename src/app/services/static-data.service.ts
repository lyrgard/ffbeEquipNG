import { Injectable } from '@angular/core';
import {LocalStorageService} from "./local-storage.service";
import {HttpClient} from "@angular/common/http";
import {AsyncSubject} from "rxjs/index";
import {ContextService} from "./context.service";

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {

  private $version:AsyncSubject<number>
  private $items:AsyncSubject<any>;
  private $units:AsyncSubject<any>;

  constructor(private localStorage:LocalStorageService, private http:HttpClient, private context:ContextService) {
  }

  get item():AsyncSubject<any> {
    if (!this.$items) {
      this.$items = new AsyncSubject();

    }
    return this.$items;
  }
}
