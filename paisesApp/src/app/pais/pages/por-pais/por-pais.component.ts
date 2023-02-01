import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {
  
  termino: string = '';
  error: boolean = false;
  paisesList: Pais[] = [];
  paisesSugeridos: Pais[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService){}

  paises(termino: string){
    this.mostrarSugerencias = false;
    this.termino = termino;
    this.error = false;
    this.paisService.buscarPais(this.termino)
      .subscribe((pais: Pais[]) => {
        this.paisesList = [...pais];
      },()=>{
        this.error = true;
      });
  }

  sugerencias(termino: string){
    this.error = false;
    this.mostrarSugerencias = true;
    this.termino = termino;
    this.paisService.buscarPais(termino)
      .subscribe(paises => this.paisesSugeridos = paises.splice(0,5),
        ()=>{
          this.paisesSugeridos = [];
        }
      );
  }


  buscarSugerido(termino: string){
    this.paises(termino);
  }
}
