import { WelcomeComponent } from './welcome.component';
import { RouterModule, Routes } from '@angular/router';

import { ComponentFixture } from '@angular/core/testing';
import { NgModule } from '@angular/core';

const welcomeRoute: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    data: {
      pageTitle: 'Bienvenidos',
    },
  },
];
@NgModule({
  imports: [RouterModule.forChild(welcomeRoute)],
  exports: [RouterModule],
})
export class WelcomeRouteModule {}
