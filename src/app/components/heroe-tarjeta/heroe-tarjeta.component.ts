import { Component, Input,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent {

  @Input() heroe:any={};
  @Input() index:any;
  @Output() heroeSelecionado:EventEmitter<number>;
  constructor(private router:Router) {
    this.heroeSelecionado = new EventEmitter();
  }
  verHeroe() {
    this.router.navigate(['/heroe', this.index])
    //console.log(this.index);
    //this.heroeSelecionado.emit(this.index);

  }

}
