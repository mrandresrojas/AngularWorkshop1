import { LoginComponent } from './login.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LoginRouteModule } from './login.route';

@NgModule({
  imports: [LoginRouteModule],
  declarations: [LoginComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginModule {}
