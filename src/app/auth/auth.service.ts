import { Injectable } from '@angular/core';
import { BaseService, httpOptions } from '../services/base.service';
import { HttpClient } from '@angular/common/http';

import { LoginResult } from '../models/loginResult';

import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService{

  private _isLoggedIn: boolean = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  //store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private http: HttpClient) { 
    super();
  }

  setLoggedStatus(value: boolean, userToken: string) {
    this._isLoggedIn = value;
    localStorage.setItem('loggedIn', value.toString());
    localStorage.setItem('userToken', JSON.stringify(userToken));
  }
  getLoggedStatus(): boolean{
    return this._isLoggedIn;
  }

  loginUser(username: string, password: string) {
    var data = JSON.stringify({username, password});
    return this.http.post<LoginResult>(this.loginUrl, data, httpOptions)
        .pipe(shareReplay());
  }

  logout(): void {
    this.setLoggedStatus(false, null);
  }
}
