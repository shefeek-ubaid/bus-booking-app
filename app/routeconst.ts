import {Router, RouterModule, Routes} from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { BusSearchComponent } from './bus-search/bus-search.component';
import { ViewBusComponent } from './view-bus/view-bus.component';
import { BusPaymentComponent } from './bus-payment/bus-payment.component';
import { LoginComponent } from './login/login.component';
import { RoutegaurdService } from './shared/services/routegaurd.service';
import { GetComponent } from './http/get/get.component';
import { PostComponent } from './http/post/post.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReactiveformsComponent } from './forms/reactiveforms/reactiveforms.component';

export const myRoutes: Routes = [{path: '', component: BusSearchComponent},
  { path: 'view-buses', loadChildren: './view-bus/view-bus.module#ViewBusModule' },
  { path: 'bus-payment', loadChildren: './bus-payment/bus-payment.module#BusPaymentModule', canActivate: [RoutegaurdService] },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'get', component: GetComponent },
  { path: 'post', component: PostComponent },
  { path: 'temp', component: TemplateFormComponent },
  { path: 'reactive', component: ReactiveformsComponent },
  {path: '**', redirectTo: ''}
];
