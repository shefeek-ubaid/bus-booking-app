import { Component, OnInit } from '@angular/core';
import { BusServiceService } from '../shared/services/bus-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-payment',
  templateUrl: './bus-payment.component.html',
  styleUrls: ['./bus-payment.component.css']
})
export class BusPaymentComponent implements OnInit {
  totalAmount = 0;
  GST = 10;
  data = 0;
  constructor(private _busSer: BusServiceService, private _router: Router) {
    this.totalAmount = this._busSer.totalAmount;
  }

  ngOnInit() {
  }
  paymentValidate(status: boolean) {
    if (status) {
      this._router.navigate(['']);
    } else {
      alert('payment failed');
    }
  }

  changeValue() {
    this.data = 1;
  }
}

