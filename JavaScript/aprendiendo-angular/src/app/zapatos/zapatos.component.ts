import { Component, OnInit } from '@angular/core';
import { zapato } from '../Models/zapato';

@Component({
  selector: 'zapatos',
  templateUrl: './zapatos.component.html',
})
export class ZapatosComponent implements OnInit {
  public titulo: string = 'Componente de zapatos';
  public zapatos: Array<zapato>;
  public marcas: string[];
  constructor() {
    this.marcas = new Array;
    this.zapatos = [
        new zapato('Nike classic', 'Nike', 'Negro', 90, true),
        new zapato('Air Jordan', 'Nike', 'Rojo', 80, false),
        new zapato('Rebook Delux', 'Rebook', 'Amarillo',120, true),
        new zapato('Gucci', 'Adidas', 'Blanco',40, true),
        new zapato('Converse', 'Rebook', 'Amarillo',70, false ),


    ];
  }
  ngOnInit(){
    console.log(this.zapatos);

    this.getMarcas();
  }

  getMarcas(){
    this.zapatos.forEach((zapato,index)=>{
      if(this.marcas.indexOf(zapato.marca)<0){
        this.marcas.push(zapato.marca);
      // console.log(index);
      }
    
    });
    console.log(this.marcas);
  }

}
