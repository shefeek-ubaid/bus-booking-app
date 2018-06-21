import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { DataService } from '../shared/services/data.service';
import { BusServiceService } from '../shared/services/bus-service.service';
import { RoutegaurdService } from '../shared/services/routegaurd.service';
import { MaterialModule } from '../../material/material/material.module';
import { FormsModule } from '@angular/forms';
export const myRoutes: Routes = [
  { path: '', component: LoginComponent },
  {path: '**', redirectTo: ''}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(myRoutes),
    MaterialModule,
    FormsModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [DatePipe],
})
export class LoginModule { }
