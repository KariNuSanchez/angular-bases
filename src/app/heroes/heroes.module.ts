import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations: [ //los componentes creados en este modulo
        HeroeComponent,
        ListadoComponent
    ],

    exports:[ //lo que se va a hacer publico
        ListadoComponent,
        HeroeComponent
    ],
    imports:[
        CommonModule
    ]
})

export class HeroesModule{}