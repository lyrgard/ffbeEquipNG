import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {EncyclopediaComponent} from "./encyclopedia/encyclopedia.component";
import {ItemInventoryComponent} from "./item-inventory/item-inventory.component";
import {UnitCollectionComponent} from "./unit-collection/unit-collection.component";
import {EspersComponent} from "./espers/espers.component";
import {UnitSearchComponent} from "./unit-search/unit-search.component";
import {BuilderComponent} from "./builder/builder.component";

export const routes: Routes = [
  {path:':language/home', component: HomeComponent, data: { order: 0 }},
  {path:':language/builder', component: BuilderComponent, data: { order: 1 }},
  {path:':language/encyclopedia', component: EncyclopediaComponent, data: { order: 2 }},
  {path:':language/unitSearch', component: UnitSearchComponent, data: { order: 3 }},
  //{path:':language/itemInventory', component: ItemInventoryComponent, data: { order: 4 }},
  {path:':language/unitCollection', component: UnitCollectionComponent, data: { order: 5 }},
  {path:':language/espers', component: EspersComponent, data: { order: 6 }},
  {path:'**', redirectTo: '/en/home'},
]
