import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DataService } from './data.service';

@Injectable()
export class RoutegaurdService implements CanActivate {
  route = '';
  constructor(private dataService: DataService, private router: Router) { }

  canActivate() {
    if (this.dataService.loginStatus) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
