import { InputDataComponentComponent } from './input-data-component.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";


@NgModule({
imports:[
    MatFormFieldModule,
    FormsModule,
    MatInputModule,

],
declarations:[InputDataComponentComponent],
providers:[],
schemas:[CUSTOM_ELEMENTS_SCHEMA],
exports:[InputDataComponentComponent]

})
export class InputDataModule{}