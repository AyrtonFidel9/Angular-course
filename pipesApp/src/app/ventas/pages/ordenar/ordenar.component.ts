import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/venta.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde,
    },
    {
      nombre: 'Spiderman',
      vuela: false,
      color: Color.rojo,
    },
  ];
  
  tipo: string = '';

  cambiarOrden (value: string): void{
    this.tipo = value;
  }
}
