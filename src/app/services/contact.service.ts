import { Injectable } from '@angular/core';
import { BaseService, httpOptions } from '../services/base.service';
import { HttpClient } from '@angular/common/http';

import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends BaseService{

  constructor(private http: HttpClient) {
    super();
   }

   submitContactForm(formData: any) { //TODO. Create Model for Contact form
    var data = JSON.stringify(formData); 
    return this.http.post<any>(this.contactUrl, data, httpOptions) //TODO. Create Model for result
        .pipe(shareReplay());
  }
}
