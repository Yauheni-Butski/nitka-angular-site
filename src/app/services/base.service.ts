import { HttpHeaders } from '@angular/common/http';

export const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

export class BaseService{
    public baseAPIurl = 'http://localhost:13021/api';

    constructor(){
        
    }
}