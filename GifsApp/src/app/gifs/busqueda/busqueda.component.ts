import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(
    private gifsService: GifsService,
  ){}


  buscar(): void {
    let value = this.txtBuscar.nativeElement.value;
    value =  value.trim().toLocaleLowerCase();
    if(value.trim().length === 0) return;
    if(this.gifsService.historial.some(item => item === value)) return;
    this.gifsService.buscarGifs(value);
    this.txtBuscar.nativeElement.value='';
  }
}
