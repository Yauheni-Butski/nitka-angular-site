import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { apiEndpoints } from './api';

import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategory(id?: number): Observable<Category> {
    const url = id
      ? `${apiEndpoints.categoriesUrl}/${id}`
      : apiEndpoints.categoriesUrl;

    return this.http.get<Category>(url);
  }
}
