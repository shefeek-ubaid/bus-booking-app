import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ViewBusComponent } from './view-bus.component';
import { DataService } from '../shared/services/data.service';
import { BusServiceService } from '../shared/services/bus-service.service';
import { RoutegaurdService } from '../shared/services/routegaurd.service';
import { MaterialModule } from '../../material/material/material.module';
import { FormsModule } from '@angular/forms';
import { ProjComponent } from '../proj/proj.component';

export const myRoutes: Routes = [
  { path: '', component: ViewBusComponent, },
  {path: '**', redirectTo: ''}

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(myRoutes),
    MaterialModule,
    FormsModule,
  ],
  declarations: [
    ViewBusComponent,
    ProjComponent
  ],
  providers: [ DatePipe],
})
export class ViewBusModule { }
