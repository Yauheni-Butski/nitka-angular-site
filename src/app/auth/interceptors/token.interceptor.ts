import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from '../auth.service';
import { authConstants } from '../const/auth.const';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public authService: AuthService, public router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let httpHandle: Observable<HttpEvent<any>>;
      let isUserTokenExist = false;

      const loggedInData = localStorage.getItem(authConstants.loginFlagKey);
      if (loggedInData) {
        const isLoggedIn: boolean = JSON.parse(localStorage.getItem(authConstants.loginFlagKey));
        if (isLoggedIn) {
            const userToken = localStorage.getItem(authConstants.userTokenKey);
            if (userToken) {
                const clonedHeader = request.clone({
                    headers: request.headers.set(authConstants.authorizationHeader, `${authConstants.tokenPrefix} ${userToken}`)
                });

                // return next.handle(clonedHeader);
                httpHandle = next.handle(clonedHeader);
                isUserTokenExist = true;
            }
        }
      }

      // return next.handle(request);
      if (!isUserTokenExist) {
        httpHandle = next.handle(request);
      }

      return httpHandle
        .pipe(
            tap(
                (event: HttpEvent<any>) => {},
                (err: any) => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status === 401) {
                            // 1. Logout
                            this.authService.logout();
                            // 2. Redirect to login
                            // Set our navigation extras object
                            // that passes on our global query params and fragment
                            const navigationExtras: NavigationExtras = {
                                queryParamsHandling: 'preserve',
                                preserveFragment: true
                            };
                            // Redirect the user
                            this.router.navigate(['/login'], navigationExtras);
                        }
                    }
                }
            )
        );
  }
}
