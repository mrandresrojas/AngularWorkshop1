import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  name: string;
  description: string;
  subtitle: string;
  constructor() {
    this.name = 'Andres Rojas';
    this.description =
      'Hola! soy Andrés Rojas desarrollador de software y fan de lo comics. me encante leer y coleccionarlos ademas de ver pelicular y maratonear series';
    this.subtitle = 'Software Dev';
  }

  ngOnInit(): void {}
}
