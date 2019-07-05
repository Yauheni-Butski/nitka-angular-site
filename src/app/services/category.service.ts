import { Injectable } from '@angular/core';

import { Category } from '../models/category';
import { BaseService} from './base.service';
import { HttpClient } from '@angular/common/http';

import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  getCategory(id?: number): Observable<Category> {
    const url = id
      ? this.categoriesUrl + '/' + `${id}`
      : this.categoriesUrl;

    return this.http.get<Category>(url);
  }
}
