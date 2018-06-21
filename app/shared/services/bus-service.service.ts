import { Injectable } from '@angular/core';
import { AjaxService } from './ajax.service';

@Injectable()
export class BusServiceService {

  routes; // [{ Id: 1, From: 'knr', To: 'tvm', Date: '2018-06-09' }, { Id: 2, From: 'tvm', To: 'knr', Date: '2018-07-09'}];
  buses; /*= [{ Id: 1, Name: 'volvo', RouteId: 1, Seats: [{SeatNo: 1, IsBooked: false, UserId: 0, Fare: 50},
           {SeatNo: 2, IsBooked: false, UserId: 0, Fare: 50 }, {SeatNo: 3, IsBooked: false, UserId: 0, Fare: 100},
           {SeatNo: 4, IsBooked: true, UserId: 2, Fare: 150 }]},
           { Id: 2, Name: 'KSRTC', RouteId: 2, Seats: [{SeatNo: 1, IsBooked: false, UserId: 2, Fare: 50},
           {SeatNo: 2, IsBooked: false, UserId: 0, Fare: 50 }, {SeatNo: 3, IsBooked: false, UserId: 0, Fare: 150},
           {SeatNo: 4, IsBooked: false, UserId: 0, Fare: 250 }]}];*/
  selectedBuses = [];
  selectedRoute = null;
  totalAmount = 0;
  constructor(private dataSer: AjaxService) { }
  setBusesByRoute(from: String, to: String, date: String) {
     this.selectedRoute = this.routes.find(route => route.From === from && route.To === to && route.Date === date);
     if (this.selectedRoute != null) {
        this.selectedBuses = this.buses.filter(bus => bus.RouteId === this.selectedRoute.Id);
      }
    }
  getSelectedBuses() {
    return this.selectedBuses;
  }

  getData() {
    this.dataSer.getRouteList().subscribe(
      result => {
        this.routes = result;
      });
    this.dataSer.getBusList().subscribe(
      res => {
        console.log(res);
        this.buses = res;
      });
  }
}
