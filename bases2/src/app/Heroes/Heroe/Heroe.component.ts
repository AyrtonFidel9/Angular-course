import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    template: `
        <h1>Heroe Component</h1>
        <h2>{{nombre}}</h2>
    `,
})
export class HeroeComponent {
    nombre: string = 'IronMan';
}