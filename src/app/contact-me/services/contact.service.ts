import { Injectable } from '@angular/core';
import { apiEndpoints, httpOptions } from '../../services/api';
import { HttpClient } from '@angular/common/http';

import { Contact, SubmitResult } from '../';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) {}

   submitContactForm(formData: Contact) {
    const data = JSON.stringify(formData);
    return this.http.post<SubmitResult>(apiEndpoints.contactUrl, data, httpOptions);
  }
}
