import { Component } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  heroes:Heroe[]= [];
constructor(
  private _heroesService:HeroesService,
  private router:Router) {
}

buscarHeroe(termino:string){
  this.router.navigate(['/buscador',termino])
  
}

}

