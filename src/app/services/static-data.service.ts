import { Injectable } from '@angular/core';
import {LocalStorageService} from "./local-storage.service";
import {HttpClient} from "@angular/common/http";
import {AsyncSubject} from "rxjs/index";
import {ContextService, Language} from "./context.service";
import {environment} from "../../environments/environment";
import {constants} from "../model/constants";
import {Item} from "../model/item";

@Injectable({
  providedIn: 'root'
})
export class StaticDataService {

  private $version:AsyncSubject<number>
  private $items:AsyncSubject<Item[]>;
  private $units:AsyncSubject<any>;

  constructor(private localStorage:LocalStorageService, private http:HttpClient, private context:ContextService) {
  }

  getItems():AsyncSubject<Item[]> {
    if (!this.$items) {
      this.$items = new AsyncSubject();
      this.getUnits().subscribe(units => {
        this.getFilename("data", true).subscribe(filename => {
          let storedData = this.localStorage.getFile(filename);
          if (storedData) {
            this.$items.next(storedData.map(i => new Item(i, units)));
            this.$items.complete();

          } else {
            this.context.server.subscribe(server => {
              this.http.get<any[]>(`${environment.baseUrl}/${server}/${filename}`).subscribe(items => {
                this.localStorage.setFile(filename, items);
                this.$items.next(items.map(i => new Item(i, units)));
                this.$items.complete();
              })
            });
          }
        });
      });
    }
    return this.$items;
  }

  getUnits():AsyncSubject<any> {
    if (!this.$units) {
      this.$units = new AsyncSubject();
      this.getFilename("units", true).subscribe(filename => {
        let storedData = this.localStorage.getFile(filename);
        if (storedData) {
          this.$units.next(storedData);
          this.$units.complete();
        } else {
          this.context.server.subscribe(server => {
            this.http.get(`${environment.baseUrl}/${server}/${filename}`).subscribe(units => {
              this.localStorage.setFile(filename, units);
              this.$units.next(units);
              this.$units.complete();
            })
          });
        }
      });
    }
    return this.$units;
  }

  private getFilename(base:string, localized:boolean = false): AsyncSubject<string> {
    let result = new AsyncSubject<string>();
    if (localized) {
      this.context.language.subscribe(language => {
        if (language != Language.JP && language != Language.EN) {
          base = `${base}_${language.toString().toLowerCase()}`;
        }
        this.getFilename(base).subscribe(filename => {
          result.next(filename);
          result.complete();
        })
      })
    } else {
      result.next(`${base}.json`)
      result.complete();
    }
    return result;
  }
}
