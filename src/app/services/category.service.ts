import { Injectable } from '@angular/core';

import { Category } from '../models/category';
import { Section } from '../models/section';
import { BaseService, httpOptions } from './base.service';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { IImageCard } from '../models/interfaces/IImageCard';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService { 
  constructor(private http: HttpClient) { 
    super();
  }

  getCategories(id? :number) : Observable<IImageCard[]>{
    var url = id 
      ? this.categoriesUrl + '/' + `${id}` 
      : this.categoriesUrl;

    return this.http.get<IImageCard[]>(url);
  }
}
