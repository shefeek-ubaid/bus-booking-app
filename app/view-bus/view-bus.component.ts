import { Component, OnInit } from '@angular/core';
import { BusServiceService } from '../shared/services/bus-service.service';
import { DataService } from '../shared/services/data.service';
import { RoutegaurdService } from '../shared/services/routegaurd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-bus',
  templateUrl: './view-bus.component.html',
  styleUrls: ['./view-bus.component.css']
})
export class ViewBusComponent implements OnInit {
  totalAmount = 0;
  selectedBuses = [];
  selectedRoute = null;
  constructor(private _busService: BusServiceService, private _dataSer: DataService,
    private _routerService: RoutegaurdService, private _router: Router) {
      console.log(JSON.stringify(this._busService.selectedBuses));
    this.selectedBuses = this._busService.selectedBuses;
    this.selectedRoute = this._busService.selectedRoute;
   }

  ngOnInit() {
  }
  selectSeat() {
    this.totalAmount = 0;
    this.selectedBuses.forEach(bus => {
    bus.Seats.filter(seat => seat.IsBooked && seat.UserId === 0).forEach(seat => {
        this.totalAmount += seat.Fare;
    });
    });
  }

  MakePayment() {
    this._busService.totalAmount = this.totalAmount;
    this._routerService.route = 'bus-payment';
    this._router.navigate([this._routerService.route]);
  }
  getstyle() {
    return { color: 'red'};
  }
}
