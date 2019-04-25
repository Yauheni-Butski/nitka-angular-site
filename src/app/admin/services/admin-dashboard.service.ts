import { Injectable } from '@angular/core';
import { BaseService } from '../../services/base.service';
import { HttpClient } from '@angular/common/http';

import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService extends BaseService{

  constructor(private http: HttpClient) { 
    super();
  }

  getAdminDashboard() : Observable<string>{
    return this.http.get<string>(this.adminDashboardUrl);
  }
}