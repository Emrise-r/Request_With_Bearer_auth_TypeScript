import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginRequest} from '../interface/login-request';

const api = "http://localhost:8081/login"

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  login(loginRequest): Observable<LoginRequest> {
    return this.http.post<LoginRequest>(api, loginRequest)
  }


}
