import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //IMPORTAMOS EL CLIENTE HTTP

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  articulos: any;
  title = 'API';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('https://scratchya.com.ar/vue/datos.php')
      .subscribe((resultado) => {
        this.articulos = resultado;
      });
  }
}
