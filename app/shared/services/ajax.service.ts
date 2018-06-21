import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  baseURL = 'http://localhost:8081/'; // http://jsonplaceholder.typicode.com/
  constructor(private http: HttpClient) { }

  getBusList() {
   const busList = this.http.get(this.baseURL + 'buses').map(res => this.convertData(res));
   this.postData();
   return busList;
  }
  convertData(res): any {
    const busList = res.map(this.formatData);
    return busList;
  }
  formatData(busData): any {
    const bus = new Bus();
    bus.Id = busData.Id;
    bus.Name = busData.Name;
    bus.RouteId = busData.RouteId;
    bus.Seats = busData.Seats;
    return bus;
  }
  getRouteList() {
    return this.http.get(this.baseURL + 'routes');
   }
   postData() {
    const obj = {'Hello': 'Hi'};
    this.http.post('http://jsonplaceholder.typicode.com/' + 'posts', obj).subscribe(result => console.log(result));
   }
}

class Bus {
   Id: Number;
   Name: String;
   RouteId: Number;
   Seats: any;
}
