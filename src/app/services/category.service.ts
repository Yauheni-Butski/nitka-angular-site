import { Injectable } from '@angular/core';

import { Category } from '../models/category';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor() { }

  getCategories() : Observable<Category[]> {
    return of ([
      { id: 1, parentId: null, name: "Weeding", order: 1, description: "Some weeding photo", coverImagePath: '/image/test.jpg' },
      { id: 2, parentId: null, name: "Portrait", order: 2, description: "Some portrait photo", coverImagePath: '/image/test.jpg' },
      { id: 3, parentId: null, name: "Nature", order: 1, description: "Some nature photo", coverImagePath: '/image/test.jpg' }
    ]); //TODO. TEST
  }
}
