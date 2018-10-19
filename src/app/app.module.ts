import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import { GitCommitComponent } from './home/git-commit/git-commit.component';
import { DiscordUsersComponent } from './home/discord-users/discord-users.component';
import { FooterComponent } from './footer/footer.component';
import { EncyclopediaComponent } from './encyclopedia/encyclopedia.component';

import { LZStringModule, LZStringService } from 'ng-lz-string';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GitCommitComponent,
    DiscordUsersComponent,
    FooterComponent,
    EncyclopediaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    LZStringModule
  ],
  providers: [
    LZStringService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
