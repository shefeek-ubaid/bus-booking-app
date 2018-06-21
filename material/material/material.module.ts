import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule,
  MatFormFieldModule, MatSelectModule, MatCardModule,
  MatInputModule, MatNativeDateModule, MatDatepickerModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatCheckboxModule,
    MatFormFieldModule, MatSelectModule, MatInputModule, MatNativeDateModule, MatDatepickerModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatCheckboxModule,
    MatFormFieldModule, MatSelectModule, MatInputModule, MatNativeDateModule, MatDatepickerModule,
    MatSelectModule
  ],
  declarations: []
})
export class MaterialModule { }
