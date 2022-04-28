import { Component } from '@angular/core';
import { retry } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'Ironman', 'Thor','Capitan America'];
  heroeBorrado: string = '';

  borrarHeroe(){
      this.heroeBorrado = this.heroes.shift() || '';
  }

  /*heroesBorrados(): boolean{
    if (this.heroeBorrado == '') {
      return false ;
    }
    else{
      return true;
    }
  }*/
}

