import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../interface/product';

// const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlbXJpc2UiLCJpYXQiOjE2MDM1MTIxMzMsImV4cCI6MTYwMzc2MjQ2MH0.e0JW90ye0wMQYprd_tRu_yuJI3oz9vV9ehzX2kPzkN1Do11QkWEHV8lSTbpsHadVJQICPQIXaUQZZZsj8SYYZQ"
const api = "http://localhost:8081/product/list"

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    public http: HttpClient
  ) { }

  getWithToken(): Observable<Product[]> {
    let token = sessionStorage.getItem('token')
    let headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Product[]>(api, {headers})
  }
}
