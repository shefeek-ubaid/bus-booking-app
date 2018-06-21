import { Component, OnInit } from '@angular/core';
 import {BusServiceService} from '../shared/services/bus-service.service';
 import {Router} from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-bus-search',
  templateUrl: './bus-search.component.html',
  styleUrls: ['./bus-search.component.css']
})
export class BusSearchComponent implements OnInit {
  from: String = 'knr';
  to: String = 'tvm';
  date: Date = new Date('2018-06-09');
  constructor(private _busSearch: BusServiceService, private _router: Router, private datePipe: DatePipe) {
  }

  ngOnInit() {
    this._busSearch.getData();
  }
  searchBus() {
    const busDate =  this.datePipe.transform(this.date, 'yyyy-MM-dd');
    this._busSearch.setBusesByRoute(this.from, this.to, busDate);
    this._router.navigate(['view-buses']);
  }
}
