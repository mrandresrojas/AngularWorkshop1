import { CRUDComponent } from './crud.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { crudRouteModule } from './crud.route';

@NgModule({
  imports: [crudRouteModule],
  declarations: [CRUDComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class crudModule {}
