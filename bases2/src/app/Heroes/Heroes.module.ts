import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./Heroe/Heroe.component";
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent,
    ],
    exports: [
        // componentes que se pueden exportar desde otros modulos
        ListadoComponent,
        HeroeComponent,

    ],
    imports: [
        // aqui a dentro van modulos
        CommonModule
    ]
})
export class HeroesModule {

}