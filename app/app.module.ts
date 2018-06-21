import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataService } from './shared/services/data.service';
import { BusSearchComponent } from './bus-search/bus-search.component';
import {Routes, RouterModule} from '@angular/router';
import {RoutegaurdService} from './shared/services/routegaurd.service';
import { myRoutes } from './routeconst';
import { BusServiceService } from './shared/services/bus-service.service';
import { CodComponent } from './bus-payment/cod/cod.component';
import { TaxPipe } from './shared/custom-pipes/tax.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { MaterialModule } from '../material/material/material.module';
import { PostComponent } from './http/post/post.component';
import { GetComponent } from './http/get/get.component';
import { HttpClientModule } from '@angular/common/http';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReactiveformsComponent } from './forms/reactiveforms/reactiveforms.component';

@NgModule({
  declarations: [
    AppComponent,
    BusSearchComponent,
    GetComponent,
    PostComponent,
    TemplateFormComponent,
    ReactiveformsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(myRoutes),
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DataService, BusServiceService, RoutegaurdService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

