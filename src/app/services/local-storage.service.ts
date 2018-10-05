import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements OnInit{

  private localStorageAvailable:boolean;

  constructor() { }

  ngOnInit(): void {
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
  }

  clear() {
    localStorage.clear();
  }
}
