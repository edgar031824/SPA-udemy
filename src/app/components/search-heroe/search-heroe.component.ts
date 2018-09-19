import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe} from '../../services/heroes.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-heroe',
  templateUrl: './search-heroe.component.html'
})
export class SearchHeroeComponent implements OnInit {
  sbValue:string="";
  arHeroe:any=[];
  obHeroe:any={};
  constructor(private _heroesService:HeroesService,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(params=>{
      this.sbValue=params['value'];
      this.arHeroe=this._heroesService.SearchHeroe(this.sbValue);
      this.obHeroe=(this.arHeroe[0])? this.arHeroe[0]:null;
    });
  }

  ngOnInit() {

  }

}
