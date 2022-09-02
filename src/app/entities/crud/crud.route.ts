import { CRUDComponent } from './crud.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const crudRoute: Routes = [
  {
    path: '',
    component: CRUDComponent,
    data: {
      pageTitle: 'CRUD',
    },
  },
];
@NgModule({
  imports: [RouterModule.forChild(crudRoute)],
  exports: [RouterModule],
})
export class crudRouteModule {}
