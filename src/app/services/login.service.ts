import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from "rxjs/index";
import {LocalStorageService} from "./local-storage.service";
import {UserDataService} from "./user-data.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {DOCUMENT} from "@angular/common";

class isLoggedResponse {
  isLogged:boolean;
}

class GoogleOAuthUrlResponse {
  url:string;
}

export enum LoggingState {
  LOADING,
  LOGGED_IN,
  LOGGED_OUT
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private logged:BehaviorSubject<LoggingState>;

  constructor(private localStorage: LocalStorageService, private userDataService: UserDataService, private http:HttpClient, @Inject(DOCUMENT) private document: Document) { }

  getLoggingState():Observable<LoggingState> {
    if (!this.logged) {
      this.logged = new BehaviorSubject<LoggingState>(LoggingState.LOADING);
      this.userDataService.getUserData().subscribe(
        logged => {
          if (logged) {
            this.logged.next(LoggingState.LOGGED_IN)
          } else {
            this.logged.next(LoggingState.LOGGED_OUT)
          }
        }
      );
    }
    return this.logged;
  }

  logout() {
    document.cookie = 'OAuthSession=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    this.localStorage.clear();
    this.logged.next(LoggingState.LOGGED_OUT);
  }

  login() {
    this.http.get<GoogleOAuthUrlResponse>(`${environment.baseUrl}googleOAuthUrl`).subscribe(({url}) => {
      this.document.location.href = url + "&state=" + encodeURIComponent(document.location.href.replace(".lyrgard.fr",".com"));
    });
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
