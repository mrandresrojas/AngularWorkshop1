import { LoginComponent } from './login.component';

import { RouterModule, Routes } from '@angular/router';

import { ComponentFixture } from '@angular/core/testing';
import { NgModule } from '@angular/core';

const loginRoute: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      pageTitle: 'Login',
    },
  },
];
@NgModule({
  imports: [RouterModule.forChild(loginRoute)],
  exports: [RouterModule],
})
export class LoginRouteModule {}
