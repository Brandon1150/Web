import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public email: string;

  constructor() {
    this.title = "Brandon Arturo Angeles Nieto";
    this.subtitle = "Programador Jr";
    this.email = "kick361@hotmail.com";
  }

  ngOnInit() {
    // Puedes agregar lógica de inicialización aquí si es necesario
  }
}

