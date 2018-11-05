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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ItemTileComponent } from './item-tile/item-tile.component';
import { ItemLinkComponent } from './name-link/name-link.component';
import { KillerListComponent } from './killer-list/killer-list.component';
import { ByValueListComponent } from './by-value-list/by-value-list.component';
import { FilterSelectorComponent } from './filter-selector/filter-selector.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatCheckboxModule, MatTabsModule, MatButtonToggleModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GitCommitComponent,
    DiscordUsersComponent,
    FooterComponent,
    EncyclopediaComponent,
    ItemTileComponent,
    ItemLinkComponent,
    KillerListComponent,
    ByValueListComponent,
    FilterSelectorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    LZStringModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonToggleModule
  ],
  providers: [
    LZStringService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
