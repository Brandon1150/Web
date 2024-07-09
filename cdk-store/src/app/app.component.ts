import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cdk-store';

  products = [
    {
        id:1,
        title: 'Camiseta',
        price: 30000,
        category: '...',
        description: 'Camiseta con el logo de la empresa, en algodón ...',
        image: 'https://via.placeholder.com/150'
    },
    {
        id:1,
        title: 'Llavero',
        price: 10000,
        category: '',
        description: 'Llavero del logo de la empresa ...',
        image: 'https://via.placeholder.com/150'
    }
    ];
}



