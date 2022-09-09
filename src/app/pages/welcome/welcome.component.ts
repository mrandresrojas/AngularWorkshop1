import { WelcomeRouteModule } from './welcome.route';
import { WelcomeService } from './welcome.service';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})

export class WelcomeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'age', 'city', 'state', 'hobbie'];

  
  name: string;
  description: string;
  subtitle: string;
  _dataSource: any[] = [];
  constructor(private welcomeService: WelcomeService) {
    this.name = 'Andres Rojas';
    this.description =
      'Hola! soy Andrés Rojas desarrollador de software y fan de lo comics. me encante leer y coleccionarlos ademas de ver pelicular y maratonear series';
    this.subtitle = 'Software Dev';
  }

  ngOnInit(): void {
    this.welcomeService.getData().subscribe((data) => {
      if (data.my_data) {
        this._dataSource=data.my_data;
      }
    });
  }
}
