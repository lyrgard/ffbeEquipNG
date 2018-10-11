import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/index";
import {serializePath} from "@angular/router/src/url_tree";

enum Server {
  GL, JP
}

enum Language {
  DEFAULT, EN, ZH, KO, FR, DE, ES
}

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  private _server:Server = Server.GL;
  private _language:Language = Language.DEFAULT;

  constructor() { }


  get server(): Server {
    return this.server;
  }
}
