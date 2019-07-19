import { Injectable } from '@angular/core';
import { apiEndpoints, httpOptions } from '../services/api';
import { HttpClient } from '@angular/common/http';

import { LoginResult } from './';

import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn: boolean = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private http: HttpClient) {}

  setLoggedStatus(value: boolean, userToken: string) {
    this._isLoggedIn = value;
    localStorage.setItem('loggedIn', value.toString());
    localStorage.setItem('userToken', userToken);
  }
  getLoggedStatus(): boolean {
    return this._isLoggedIn;
  }

  loginUser(username: string, password: string) {
    const data = JSON.stringify({username, password});
    return this.http.post<LoginResult>(apiEndpoints.loginUrl, data, httpOptions)
        .pipe(shareReplay());
  }

  logout(): void {
    this.setLoggedStatus(false, null);
  }
}
