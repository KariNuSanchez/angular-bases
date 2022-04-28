//import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";

@NgModule({
    declarations: [ //los componentes creados en este modulo
    ContadorComponent,
    ],

    exports:[ //lo que se va a hacer publico
    ContadorComponent,
    ],
    imports:[
        
    ]
})

export class ContadorModule{}