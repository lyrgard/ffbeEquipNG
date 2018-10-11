import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from "rxjs/index";
import {LocalStorageService} from "./local-storage.service";
import {UserDataService} from "./user-data.service";

class isLoggedResponse {
  isLogged:boolean;
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

  constructor(private localStorage: LocalStorageService, private userDataService: UserDataService) { }

  getLoggingState():Observable<LoggingState> {
    if (!this.logged) {
      this.logged = new BehaviorSubject<LoggingState>(LoggingState.LOADING);
      if (this.isSessionCookiePresent()) {
        this.userDataService.getUserData().subscribe(
          r => this.logged.next(LoggingState.LOGGED_IN),
          () => this.logged.next(LoggingState.LOGGED_OUT)
        );
      } else {
        this.logged.next(LoggingState.LOGGED_OUT);
      }
    }
    return this.logged;
  }

  private isSessionCookiePresent(): boolean {
    return !!document.cookie.match(/^(.*;)?[ ]{0,1}OAuthSession=[^;]+(.*)?$/);
  }

  logout() {
    document.cookie = 'OAuthSession=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    this.localStorage.clear();
    this.logged.next(LoggingState.LOGGED_OUT);
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
