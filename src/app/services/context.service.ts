import { Injectable } from '@angular/core';

enum Server {
  GL = "GL", JP = "JP"
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
    return this._server;
  }
}
