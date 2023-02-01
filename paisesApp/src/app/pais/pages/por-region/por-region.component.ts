import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {
  regiones: string[] = [ "africa", "americas", "asia", "europe", "oceania"];
  regionActiva: string = '';
  paises: Pais[] = [];

  constructor(
    private paisService: PaisService,
  ){}

  activarRegion(region: string){
    this.regionActiva = region;
    this.paisService.buscarPorRegiones(region)
      .subscribe(resp => {
        this.paises = [...resp]
      });
  }

  getClaseCSS(region: string): string{
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

}
