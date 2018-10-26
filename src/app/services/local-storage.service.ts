import {Injectable, OnInit} from '@angular/core';
import {ContextService} from "./context.service";
import {AsyncSubject, forkJoin} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {LZStringService} from "ng-lz-string";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private localStorageAvailable:boolean;
  private localStorageReady:AsyncSubject<boolean> = new AsyncSubject<boolean>();
  private version:number;
  private language:string;
  private server:string;


  constructor(private context:ContextService, private http:HttpClient, private lz: LZStringService) {
    this.localStorageAvailable = false;
    if (window.localStorage) {
      var test = "test";
      try {
        localStorage.setItem(test, test);
        this.localStorageAvailable = test === localStorage.getItem(test);
        localStorage.removeItem(test);
      } catch(e) {
        this.localStorageAvailable = false;
      }
    }

    if (this.localStorageAvailable) {
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

  getFile(filename:string): any {
    if (this.localStorageAvailable) {
      try {
        var dataString = localStorage.getItem(filename);
        if (dataString) {
          // Decompress string and parse
          return JSON.parse(this.lz.decompress(dataString));
        }
      } catch (error) {
        window.console && window.console.warn("An error occured while trying to retrieve the file "+filename+" from your local storage", error);
        // Failsafe: remove item in case of error (to free space if needed)
        try { localStorage.removeItem(filename); } catch(e){}
      }
    }
    return null;
  }

  setFile(filename:string, data:any) {
    if (this.localStorageAvailable) {
      if (typeof data === 'object') {
        data = this.lz.compress(JSON.stringify(data));
      }
      localStorage.setItem(filename, data);
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
