import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {
  termino: string = '';
  error: boolean = false;
  paisesList: Pais[] = [];

  constructor(private paisService: PaisService){}

  paises(termino: string){
    this.termino = termino;
    this.error = false;
    this.paisService.buscarPorCapital(this.termino)
      .subscribe((pais: Pais[]) => {
        this.paisesList = [...pais];
      },()=>{
        this.error = true;
      });
  }

}
