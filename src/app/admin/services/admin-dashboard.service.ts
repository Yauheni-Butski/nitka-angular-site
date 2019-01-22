import { Injectable } from '@angular/core';
import { BaseService } from '../../services/base.service';
import { HttpClient } from '@angular/common/http';

//import { AdminModule } from '../admin.module'

import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'//AdminModule //TODO. Как сделать чтобы был только в AdminModule, а то возникает круговая зависимость
})
export class AdminDashboardService extends BaseService{

  constructor(private http: HttpClient) { 
    super();
  }

  getAdminDashboard() : Observable<string>{
    return this.http.get<string>(this.adminDashboardUrl);
  }
}