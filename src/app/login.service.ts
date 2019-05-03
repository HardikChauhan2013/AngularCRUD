import { Injectable, Inject, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  Login_Service = 'http://localhost:3000/Users';

  currentUser = null;

  constructor(@Inject(HttpClient) private proxy: HttpClient) { }

  loginStateChanged = new EventEmitter();

  LogIn(value: any) {
    return this.proxy.get(this.Login_Service).toPromise()
      .then((data: []) => {
        this.currentUser = data.find((p: any) => {
          return p.UserName === value.UserName && p.Password === value.Password;
        });
        this.loginStateChanged.emit(this.currentUser);
        return this.currentUser;
      });
  }

  LogOut() {
    this.currentUser = null;
    this.loginStateChanged.emit(null);
  }


}
