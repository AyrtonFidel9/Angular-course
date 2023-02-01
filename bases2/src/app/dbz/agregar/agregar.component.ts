import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/personaje';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  }

  @Input() personajes: Personaje[] = [];

  agregar(): void {
    this.personajes.push( this.nuevo );
    this.nuevo = {
      nombre: '',
      poder: 0,
    }
  }

}
