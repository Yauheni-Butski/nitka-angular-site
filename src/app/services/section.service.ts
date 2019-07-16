import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

import { Section } from '../models/section';

import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getSection(id: number): Observable<Section[]> {
    const url = `${this.sectionUrl}/${id}`;

    return this.http.get<Section[]>(url);
  }
}
