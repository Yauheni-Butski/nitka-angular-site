import { Injectable } from '@angular/core';

import { Category } from '../models/category';
import { BaseService, httpOptions } from './base.service';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService { 
  constructor(private http: HttpClient) { 
    super();
  }

  getCategories() : Observable<Category[]> {

    //Offline version. TODO. For TEST
   /*  let testCategories = [
      { id: 1, parentId: null, name: "Weeding", order: 1, description: "Some weeding photo", coverImagePath: '/image/test.jpg' },
      { id: 2, parentId: null, name: "Portrait", order: 2, description: "Some portrait photo", coverImagePath: '/image/test.jpg' },
      { id: 3, parentId: null, name: "Nature", order: 1, description: "Some nature photo", coverImagePath: '/image/test.jpg' }
    ];
    return of(testCategories); */


    let categoriesUrl = this.baseAPIurl + '/' + 'categories';
    return this.http.get<Category[]>(categoriesUrl);
  }
}
