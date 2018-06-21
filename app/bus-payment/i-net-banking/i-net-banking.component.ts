import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-i-net-banking',
  templateUrl: './i-net-banking.component.html',
  styleUrls: ['./i-net-banking.component.css']
})
export class INetBankingComponent implements OnInit {
  @Input() totalAmount;
  @Output() payEve = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  paymentValidate() {
    const status = false;
    this.payEve.emit(status);
  }
}
