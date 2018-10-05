import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment"
import {Observable, of, Subject} from "rxjs/index";
import {LocalStorageService} from "./local-storage.service";

class isLoggedResponse {
  isLogged:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private logged:Subject<boolean>;

  constructor(private http: HttpClient, private localStorage: LocalStorageService) { }

  getLoggingState():Observable<boolean> {
    if (!this.logged) {
      this.logged = new Subject<boolean>();
      this.http.get<isLoggedResponse>(`${environment.baseUrl}/isLogged`).subscribe(r => this.logged.next(r.isLogged), this.handleError('isLogged', {'isLogged':false}));
    }
    return this.logged;
  }

  logout() {
    document.cookie = 'OAuthSession=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    this.localStorage.clear();
    this.logged.next(false);
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
