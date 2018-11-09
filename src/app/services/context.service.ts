import {Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject} from "rxjs/index";
import {filter} from "rxjs/internal/operators";

export enum Server {
  GL = "GL", JP = "JP"
}

export enum Language {
  EN = "en", ZH = "zh", KO = "ko", FR = "fr", DE = "de", ES = "es", JP = "jp"
}

export enum Pages {
  HOME, BUILDER, ENCYCLOPEDIA, UNIT_SEARCH, ITEM_INVENTORY, MY_UNITS, MY_ESPERS, CONTRIBUTE
}

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  private $server:AsyncSubject<Server> = new AsyncSubject<Server>();
  private $language:AsyncSubject<Language> = new AsyncSubject<Language>();
  private $page:BehaviorSubject<Pages> = new BehaviorSubject<Pages>(Pages.HOME);

  constructor(private router: Router) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(e => {
      let language = this.router.parseUrl(this.router.url).root.children.primary.segments[0].path;
      if (Object.values(Language).includes(language)) {
        this.$language.next(Language[language.toUpperCase()]);
        if (language == "jp") {
          this.$server.next(Server.JP);
        } else {
          this.$server.next(Server.GL);
        }
        this.$server.complete();
        this.$language.complete();
      }
    });
  }

  get server(): Observable<Server> {
    return this.$server;
  }

  get language(): Observable<Language> {
    return this.$language;
  }

  setCurrentPage(page:Pages) {
    this.$page.next(page);
  }

  get currentPage(): BehaviorSubject<Pages> {
    return this.$page;
  }
}
