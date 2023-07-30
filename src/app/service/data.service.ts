import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CardInfoItem } from '../models/card-info';
import { ApiResponse } from '../models/api-response';
import { productItems } from '../data/product';
import { data1 } from '../data/client';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiURL = '/controller/read/indicators'; // URL da API para recuperar os indicadores

  constructor(private http: HttpClient) { }

  getIndicadores(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiURL);
  }


  getSalesByStore(): Observable<any> {
    const salesByStore = [
      { name: 'Loja A', value: 100 },
      { name: 'Loja B', value: 200 },
      { name: 'Loja C', value: 150 },
      { name: 'Loja D', value: 50 }
    ];

    // Simule uma chamada HTTP e retorne os dados como um Observable
    return of({ success: true, data: salesByStore });
  }

  getProdutosConstrucaoCivil() {
    return productItems;
  }

  getClientes() {
    return data1;
  }

}
