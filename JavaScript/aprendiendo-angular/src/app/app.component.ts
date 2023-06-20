import { Component } from '@angular/core';
import { configuracion } from './Models/configuracion';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  public title = 'Master de Angular Brandon';
  public descripcion: string;
  public mostrar_videojuegos : boolean = true;
 

  constructor(){
    this.title = configuracion.titulo;
    this.descripcion = configuracion.descripcion;
    
  }

  ocultarVideojuegos(value:boolean){
    this.mostrar_videojuegos = value;
    
  }
}
