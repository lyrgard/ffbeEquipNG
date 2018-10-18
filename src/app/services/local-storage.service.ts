import {Injectable, OnInit} from '@angular/core';
import {ContextService} from "./context.service";
import {AsyncSubject, forkJoin} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private localStorageAvailable:boolean;
  private localStorageReady:AsyncSubject<boolean> = new AsyncSubject<boolean>();
  private version:number;
  private language:string;
  private server:string;


  constructor(private context:ContextService, private http:HttpClient) {
    var localStorageAvailable = false;
    if (window.localStorage) {
      var test = "test";
      try {
        localStorage.setItem(test, test);
        localStorageAvailable = test === localStorage.getItem(test);
        localStorage.removeItem(test);
      } catch(e) {
        localStorageAvailable = false;
      }
    }

    if (localStorageAvailable) {
      forkJoin(
        context.server,
        context.language
      ).subscribe(([server, language]) => {
        this.http.get<any>(`${environment.baseUrl}/${server}/dataVersion`).subscribe(({dataVersion}) => {
          this.version = dataVersion;
          this.language = language;
          this.server = server;
          try {
            let cachedVersion = JSON.parse(localStorage.getItem("dataVersion"));
            if (cachedVersion.server != server || cachedVersion.language != language || cachedVersion.version != dataVersion) {
              this.reInitLocalStorage();
            }
          } catch (e) {
            // No able to read data version, reinit
            this.reInitLocalStorage();
          }
          this.localStorageReady.next(true);
          this.localStorageReady.complete();
        })
      })
    }
  }

  clear() {
    this.localStorageReady.subscribe(() => this.reInitLocalStorage());
  }

  private reInitLocalStorage() {
    this.clear();
    localStorage.setItem("dataVersion", JSON.stringify({"version": this.version, "server": this.server, "language": this.language}));
  }
}
