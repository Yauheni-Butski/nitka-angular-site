import { Injectable } from '@angular/core';
import { apiEndpoints } from '../../services/api';
import { HttpClient } from '@angular/common/http';

import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

  constructor(private http: HttpClient) {}

  getAdminDashboard(): Observable<string> {
    return this.http.get<string>(apiEndpoints.adminDashboardUrl);
  }
}
