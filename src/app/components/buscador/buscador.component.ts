import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent {
  @Input() heroes:any[]=[];
  @Input() termino: any;
  @Input() index:any;
  @Output() heroeSelecionado:EventEmitter<number>;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService:HeroesService, 
              private router:Router,
              ) {
                this.heroeSelecionado = new EventEmitter();
              }
  ngOnInit() {
    this.activatedRoute.params.subscribe( params=>{ 
      this.termino = params['termino'];
      this.heroes=this._heroesService.buscarHero(params['termino']);
    });
    
  }
  verHeroe() {
    this.router.navigate(['/heroe', this.index])
    console.log(this.index);

  }
}
