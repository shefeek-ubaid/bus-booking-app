import { Component, Output, OnInit, EventEmitter, OnChanges, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-cod',
  templateUrl: './cod.component.html',
  styleUrls: ['./cod.component.css']
})
export class CodComponent implements OnInit, OnChanges, OnDestroy {
  @Output() payEve = new EventEmitter();
  @Input() data;
  constructor() { console.log('child const'); }

  ngOnInit() {
    console.log('child onint');
  }
  ngOnChanges() {
    console.log('child change');
  }
  ngOnDestroy() {
    console.log('child destroy');
  }
  paymentValidate() {
    const status = true;
    this.payEve.emit(status);
  }
}
