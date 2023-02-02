import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //i18nselect
  nombre: string = 'Susana';
  genero: string = 'femenino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  //i18nplural
  clientes: string[] = ['Maria','Pedro','Juan'];
  clientesMapa={
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': `tenemos # clientes esperando`,

  }

  cambiarCliente(): void{
    this.nombre="Jose Luis";
    this.genero='masculino';
  }

  borrarCliente(): void {
    this.clientes.pop();
  }

  persona= {
    nombre: 'Fidel Avalos',
    edad: 23,
    direaccion: 'Guano, San Andrés'
  }
}