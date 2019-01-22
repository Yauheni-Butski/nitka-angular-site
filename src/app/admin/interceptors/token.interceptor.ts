import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
      const loggedInData = localStorage.getItem("loggedIn");
      if (loggedInData){
        var isLoggedIn: boolean = JSON.parse(localStorage.getItem('loggedIn'));
        if (isLoggedIn){
            const userToken = localStorage.getItem("userToken");
            if (userToken){
                const clonedHeader = request.clone({
                    headers: request.headers.set("Authorization", `Bearer ${userToken}`)
                });

                return next.handle(clonedHeader);
            }
        }
      }

      return next.handle(request);
  }
}