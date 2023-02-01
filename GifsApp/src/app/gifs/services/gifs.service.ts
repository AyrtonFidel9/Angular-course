import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datum, SearchGifsResponse } from '../interfaces/SearchGifsResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'wyhLn4h5PdJDGc5PUFAlOwnL7HRGbq9P';
  private url: string = 'api.giphy.com/v1/gifs/search';

  private _historial: string[] = [];
  private _resultados: Datum[] = []; 

  constructor( 
    private http: HttpClient
  ) { }

  get resultados(){
    return [...this._resultados];
  }

  get historial(){
    return [...this._historial];
  }

  buscarGifs(valor: string): void{
    this._historial.unshift(valor);
    this._historial = this._historial.splice(0,10); 

    this.http.get<SearchGifsResponse>(`https://${this.url}?api_key=${this.apiKey}&q=${valor}&limit${10}`)
      .subscribe( (resp) =>{
        console.log(resp.data);
        this._resultados = resp.data;
      });

  }
}
