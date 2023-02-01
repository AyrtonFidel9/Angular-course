import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Datum } from '../interfaces/SearchGifsResponse.interface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {
  get resultados(): Datum[]{
    return this.gifsService.resultados;
  }

  constructor(
    private gifsService: GifsService,
  ){}
}
