import { crudModule } from './entities/crud/crud.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, crudModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
