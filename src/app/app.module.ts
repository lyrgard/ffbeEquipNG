import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './pages/home/home.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import { GitCommitComponent } from './pages/home/git-commit/git-commit.component';
import { DiscordUsersComponent } from './pages/home/discord-users/discord-users.component';
import { FooterComponent } from './components/footer/footer.component';
import { EncyclopediaComponent } from './pages/encyclopedia/encyclopedia.component';

import { LZStringModule, LZStringService } from 'ng-lz-string';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ItemTileComponent } from './components/item-tile/item-tile.component';
import { ItemLinkComponent } from './components/name-link/name-link.component';
import { KillerListComponent } from './components/killer-list/killer-list.component';
import { ByValueListComponent } from './components/by-value-list/by-value-list.component';
import { FilterSelectorComponent } from './components/filter-selector/filter-selector.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatCheckboxModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatButtonModule,
  MatChipsModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatRippleModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule
} from "@angular/material";
import { ItemInventoryComponent } from './pages/item-inventory/item-inventory.component';
import { UnitCollectionComponent } from './pages/unit-collection/unit-collection.component';
import { EspersComponent } from './pages/espers/espers.component';
import { UnitSearchComponent } from './pages/unit-search/unit-search.component';
import { BuilderComponent } from './pages/builder/builder.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { ClickPropagationStopDirective } from './directives/click-propagation-stop.directive';
import { CounterComponent } from './components/counter/counter.component';
import { ItemEnhancementComponent } from './components/item-enhancement/item-enhancement.component';

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
    FilterSelectorComponent,
    UnitCollectionComponent,
    EspersComponent,
    UnitSearchComponent,
    BuilderComponent,
    ItemInventoryComponent,
    IconButtonComponent,
    ClickPropagationStopDirective,
    CounterComponent,
    ItemEnhancementComponent,
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
    MatButtonToggleModule,
    MatButtonModule,
    MatChipsModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
  ],
  providers: [
    LZStringService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
