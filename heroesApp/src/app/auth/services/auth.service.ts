import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Auth } from '../interfaces/auth.interface';
import { tap, Observable, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _auth: Auth | undefined;

  private baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient,
  ) { }

  get auth(){
    return {...this._auth}
  }


  verificaAutenticacion(): Observable<boolean> {
    if(!localStorage.getItem('id')){
      return of(false);
    }

    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        map((authN) => {
          this._auth = authN;
          return true;
        })
    )
  }

  login(){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        tap(resp => this._auth = resp),
        tap(auth => localStorage.setItem('id', auth.id)),
      );
  }

  logout(): void {
    this._auth = undefined;
  }
}
