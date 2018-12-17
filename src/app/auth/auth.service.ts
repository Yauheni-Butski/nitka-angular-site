import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  //store the URL so we can redirect after logging in
  redirectUrl: string;

  loginUser(username, password) : Observable<boolean> {
    var isCanLogin = username === "admin" && password === "admin";

    return of(isCanLogin).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = isCanLogin)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
