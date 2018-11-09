import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {EncyclopediaComponent} from "./encyclopedia/encyclopedia.component";
import {ItemInventoryComponent} from "./item-inventory/item-inventory.component";

export const routes: Routes = [
  {path:':language/home', component: HomeComponent},
  {path:':language/encyclopedia', component: EncyclopediaComponent},
  {path:':language/itemInventory', component: ItemInventoryComponent},
  {path:'**', redirectTo: '/en/home'}
]
