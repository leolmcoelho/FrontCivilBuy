import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardInfoItem } from '../models/card-info';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiURL = '/controller/read/indicators'; // URL da API para recuperar os indicadores

  constructor(private http: HttpClient) { }

  getIndicadores(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiURL);
  }
}
