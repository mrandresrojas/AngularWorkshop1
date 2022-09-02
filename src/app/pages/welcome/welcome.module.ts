import { WelcomeComponent } from './welcome.component';

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { WelcomeRouteModule } from './welcome.route';

@NgModule({
  imports: [WelcomeRouteModule],
  declarations: [WelcomeComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WelcomeModule {}
