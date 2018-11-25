import { HttpHeaders } from '@angular/common/http';

export const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

export class BaseService{
    public baseAPIurl = 'http://work.local/api'; //'http://localhost:13021/api'
    public categoriesUrl = 'http://work.local/api/categories';
    public sectionUrl = 'http://work.local/api/section';

    constructor(){
        
    }
}