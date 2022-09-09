import { crudModule } from './entities/crud/crud.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import {MaterialModule} from '../material.module';
import { InputDataComponentComponent } from './shared/input-data-component/input-data-component.component';



@NgModule({
  declarations: [AppComponent, InputDataComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    crudModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
