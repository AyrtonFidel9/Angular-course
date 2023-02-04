import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit{
    items: MenuItem[] = [];

    ngOnInit(): void {
        console.log("componente menu cargado");
        this.items = [{
            label: 'Pipes de angular',
            icon: 'pi pi-desktop',
            items: [
                {label: 'Textos y flechas', icon: 'pi pi-align-left',  routerLink: ['/basicos']},
                {label: 'Números', icon: 'pi pi-dollar', routerLink: ['/numeros']},
                {label: 'No comunes', icon: 'pi pi-globe', routerLink: ['/no-comunes']}
            ]
        },
        {
            label: 'Pipes personalizados',
            icon: 'pi pi-cog',
            routerLink: ['/ordenar']
        }];
    }
}
