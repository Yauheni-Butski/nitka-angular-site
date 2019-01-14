import { Injectable } from '@angular/core';
import { BaseService, httpOptions } from '../services/base.service';
import { HttpClient } from '@angular/common/http';

import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService{

  constructor(private http: HttpClient) { 
    super();
  }

  isLoggedIn = false;
  //store the URL so we can redirect after logging in
  redirectUrl: string;

  loginUser(username: string, password: string) {
    var data = JSON.stringify({username, password});
    return this.http.post<boolean>(this.loginUrl, data, httpOptions)
        .pipe(shareReplay());
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
