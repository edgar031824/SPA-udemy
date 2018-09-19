import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchHeroeComponent } from './components/search-heroe/search-heroe.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent},
  // se recibe el paramentro id del, luego lo podemos acceder desde con el método params.subscribe de la clase
  //ActivatedRoute la cual se importa en el archivo heroe.component.ts
  { path: 'heroe/:id', component: HeroeComponent},
  { path: 'search/:value', component: SearchHeroeComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(APP_ROUTES);
