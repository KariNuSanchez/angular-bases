import { Component } from '@angular/core';
//decorador
@Component({
    selector: 'app-contador',
    template: `
    <h1>{{ title }}</h1>
    <!-- acumulador de 5 en 5 -->
    <h3> La base es: <strong> {{ base}} </strong></h3>
    <button (click)="acumular(-5)"> -5 </button>
    <span> {{ base }} </span>
    <button (click)="acumular(5)"> +5 </button>

    <!-- acumulador de uno en uno -->
    <br> <br>
    <button (click)="restar()"> -1 </button>
    <span> {{ numero }} </span>
    <button (click)="sumar()"> +1 </button>
        `
    })
 export class ContadorComponent {
    title: string = 'Contador App';
    numero: number = 10; 
    base: number = 5;
    //se usa el this porque se hace referencia
    //a la propiedad de la clase
     sumar (){
       this.numero += 1;
     }
     restar (){
      this.numero += -1;
     }
  //acumular de 5 en 5 
     acumular  ( valor :number){
       this.base += valor;
     }

 }