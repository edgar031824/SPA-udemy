import { Component, OnInit } from '@angular/core';
// se importa el ActivatedRoute para recibir parametros
import {ActivatedRoute} from '@angular/router';
import { HeroesService,Heroe} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {
  heroe:any={};
  src:string='';
  constructor(private _heroesService:HeroesService,private activatedRoute:ActivatedRoute) {
    // el párametro id se recibe ya que en app.routes.ts se lo estamos enviando cuando incluimos la ruta de este.
    this.activatedRoute.params.subscribe(params=>{
        this.heroe=this._heroesService.getHeroe(params['id']);
        if(this.heroe['casa']==='DC'){
          this.src="data:image/jpeg;base64,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"
        }else{
            this.src="data:image/jpeg;base64,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"
        }
    });
   }

}
