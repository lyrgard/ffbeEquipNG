import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {EncyclopediaComponent} from "./encyclopedia/encyclopedia.component";

export const routes: Routes = [
  {path:':language/', component: HomeComponent},
  {path:':language/encyclopedia', component: EncyclopediaComponent},
  {path:'**', redirectTo: '/en/'}
]
