import { Component, OnInit, Output, EventEmitter as eveEmitter } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {
  @Output() payEve = new eveEmitter();
  constructor() { }

  ngOnInit() {
  }
  paymentValidate() {
    const status = true;
    this.payEve.emit(status);
  }
}
