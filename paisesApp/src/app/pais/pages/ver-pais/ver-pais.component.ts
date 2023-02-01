import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit{
  pais!: Pais;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService,
  ){

  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ codigoPais }) => 
          this.paisService.buscarPaisUnico(codigoPais)),
        tap( console.log ) // recibe el priducto del observable y le permite realizar acciones
      )
      .subscribe( pais => {
        this.pais = pais;
      }, ()=>{
        
      })
  }

}
