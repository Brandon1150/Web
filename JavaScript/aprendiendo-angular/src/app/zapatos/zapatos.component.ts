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
  public color: string;
  public mi_marca:string;
  constructor() {
    this.mi_marca = 'Jordan'
    this.color = 'orange';
    this.marcas = new Array();
    this.zapatos = [
      new zapato('Nike classic', 'Nike', 'Negro', 90, true),
      new zapato('Air Jordan', 'Nike', 'Rojo', 80, false),
      new zapato('Rebook Delux', 'Rebook', 'Amarillo', 120, true),
      new zapato('Gucci', 'Adidas', 'Blanco', 40, true),
      new zapato('Converse', 'Rebook', 'Amarillo', 70, false),
    ];
  }
  ngOnInit() {
    console.log(this.zapatos);

    this.getMarcas();
  }

  getMarcas() {
    this.zapatos.forEach((zapato, index) => {
      if (this.marcas.indexOf(zapato.marca) < 0) {
        this.marcas.push(zapato.marca);
        // console.log(index);
      }
    });
    console.log(this.marcas);
  }

  getMarca(){
    alert(this.mi_marca);
  }

  addMarca(){
    this.marcas.push(this.mi_marca);
  }
  onBlur(){
    console.log("Has salido del input");
  }
  

}
