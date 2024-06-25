import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  paises: any;
  title = 'API_COVID-19';


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('https://api.covid19api.com/summary')
      .subscribe((resultado) => {
        this.paises = resultado;
      });
  }
}
