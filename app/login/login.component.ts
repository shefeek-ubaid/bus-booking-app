import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { Router } from '@angular/router';
import { RoutegaurdService } from '../shared/services/routegaurd.service';


@Component({
  selector: 'app-login-view',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginStatus = false;
  errorMsgShow = false;
  userName: String = '';
  pass: String = '';
  constructor(private dataser: DataService, private _router: Router, private _routeGaurdSer: RoutegaurdService) { }

  ngOnInit() {
  }
  validateUser() {
    this.loginStatus = this.dataser.autherizeUser(this.userName, this.pass);
    if (this.loginStatus) {
      this.errorMsgShow = false;
      this._router.navigate([this._routeGaurdSer.route]);
    } else {
      this.errorMsgShow = true;
    }
  }
}
