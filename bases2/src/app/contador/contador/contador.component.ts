import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{title}}</h1>
        <h3>Mi base es <strong>{{base}}</strong></h3>

        <button (click)="acumular(true)"> + {{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumular(false)"> - {{base}}</button>
    `,
})
export class ContadorComponent {
    title = 'bases';
    public numero: number = 10;

    base: number = 5;


    acumular(sumar: boolean) {
        this.numero += sumar ? this.base : -this.base;
    }
}