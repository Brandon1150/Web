import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) { }

  conectarADB() {
    this.http.get<any>('http://localhost/db.php')
      .subscribe(
        response => {
          console.log('Conexión exitosa a la base de datos');
          
        },
        error => {
          console.error('Error de conexión a la base de datos:', error);
        }
      );
  }
}
