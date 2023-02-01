import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(
    private http: HttpClient
  ) { }

  buscarPais(termino: string): Observable<Pais[]>{
    return this.http.get<Pais[]>(`${this.apiUrl}/name/${termino}`);

  } 

  buscarPorCapital(termino: string): Observable<Pais[]>{
    return this.http.get<Pais[]>(`${this.apiUrl}/capital/${termino}`);
  }

  buscarPaisUnico(termino: string): Observable<Pais>{
    return this.http.get<Pais>(`${this.apiUrl}/alpha/${termino}`);
  }

  buscarPorRegiones(termino: string): Observable<Pais[]>{
    return this.http.get<Pais[]>(`${this.apiUrl}/region/${termino}`);
  }
}
