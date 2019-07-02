import { Injectable } from '@angular/core';
import { BaseService, httpOptions } from '../../services/base.service';
import { HttpClient } from '@angular/common/http';

import { Contact } from '../models/contact';
import { SubmitResult } from '../../models/submitResult';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends BaseService{

  constructor(private http: HttpClient) {
    super();
   }

   submitContactForm(formData: Contact) {
    var data = JSON.stringify(formData);
    return this.http.post<SubmitResult>(this.contactUrl, data, httpOptions);
  }
}
