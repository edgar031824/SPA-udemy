import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe} from '../../services/heroes.service';
// se importa el router para poder redireccionar
import { Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[]=[];
  heroe:Heroe
  constructor(private _heroesService:HeroesService,private router:Router) {
   }

  ngOnInit() {
    this.heroes=this._heroesService.getHeroes();
  }

  verHeroe(i:number){
  this.router.navigate(['/heroe',i]);
  }

}
