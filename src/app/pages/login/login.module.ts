import { MaterialModule } from './../../../material.module';
import { LoginComponent } from './login.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LoginRouteModule } from './login.route';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [LoginRouteModule,FormsModule,MaterialModule],
  declarations: [LoginComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginModule {}
