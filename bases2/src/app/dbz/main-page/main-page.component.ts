import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personaje';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[] = [{
    nombre: 'Goku',
    poder: 20000,
  },
  {
    nombre: 'Vegeta',
    poder: 30000,
  }];

  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  }

  
}
