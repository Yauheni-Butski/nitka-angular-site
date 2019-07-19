import { Injectable } from '@angular/core';
import { apiEndpoints } from './api';
import { HttpClient } from '@angular/common/http';

import { Section } from '../models/section';

import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private http: HttpClient) {}

  getSection(id: number): Observable<Section[]> {
    const url = `${apiEndpoints.sectionUrl}/${id}`;

    return this.http.get<Section[]>(url);
  }
}
