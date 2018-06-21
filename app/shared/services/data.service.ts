import { Injectable } from '@angular/core';


const users = [{ Id: 1, Name: 'User1', Password: 'pass1'}, { Id: 2 , Name: 'User2', Password: 'pass2'}];

@Injectable()
export class DataService {

  loginStatus = false;
  constructor() { }
  autherizeUser(uName, pWord): boolean {
    if (users.find(user => user.Name === uName && user.Password === pWord)) {
      this.loginStatus = true;
    } else {
      this.loginStatus = false;
    }
    return this.loginStatus;
  }

}
