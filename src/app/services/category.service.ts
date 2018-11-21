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

  getCategories() : Observable<IImageCard[]> {

    //Offline version. TODO. For TEST
   /*  let testCategories = [
      { id: 1, parentId: null, name: "Weeding", order: 1, description: "Some weeding photo", coverImagePath: '/image/test.jpg' },
      { id: 2, parentId: null, name: "Portrait", order: 2, description: "Some portrait photo", coverImagePath: '/image/test.jpg' },
      { id: 3, parentId: null, name: "Nature", order: 1, description: "Some nature photo", coverImagePath: '/image/test.jpg' }
    ];
    return of(testCategories); */

    return this.http.get<IImageCard[]>(this.categoriesUrl);
  }

  getCategorySection(id: number) : Observable<IImageCard[]> {
    var url = this.categoriesUrl + '/' + `${id}`;
    return this.http.get<IImageCard[]>(url)
  }


}
