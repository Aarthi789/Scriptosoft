import { NgModule } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

const mat =[
  MatExpansionModule,MatFormFieldModule,MatInputModule
];

@NgModule({
  declarations: [],
  imports: [mat],
  exports:[mat]
})
export class MaterialModule { }
