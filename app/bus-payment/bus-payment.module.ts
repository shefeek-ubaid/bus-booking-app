import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BusPaymentComponent } from './bus-payment.component';
import { RoutegaurdService } from '../shared/services/routegaurd.service';
import { INetBankingComponent } from './i-net-banking/i-net-banking.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CodComponent } from './cod/cod.component';
import { TaxPipe } from '../shared/custom-pipes/tax.pipe';
import { DataService } from '../shared/services/data.service';
import { BusServiceService } from '../shared/services/bus-service.service';
import { MaterialModule } from '../../material/material/material.module';
import { FormsModule } from '@angular/forms';

export const myRoutes: Routes = [
  { path: '', component: BusPaymentComponent, canActivate: [RoutegaurdService] },
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
    INetBankingComponent,
    CreditCardComponent,
    CodComponent,
    BusPaymentComponent,
    TaxPipe
  ],
  providers: [ DatePipe],
})
export class BusPaymentModule { }
