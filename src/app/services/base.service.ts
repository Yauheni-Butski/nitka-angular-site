import { HttpHeaders } from '@angular/common/http';

export const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

export class BaseService{
    public baseAPIurl = 'http://work.local/api'; // 'http://localhost:13021/api';
    public categoriesUrl = this.baseAPIurl + '/categories';
    public sectionUrl = this.baseAPIurl + '/section';
    public loginUrl = this.baseAPIurl + '/login';
    public contactUrl = this.baseAPIurl + '/contact';

    public adminDashboardUrl = this.baseAPIurl + '/admin/dashboard';
}
