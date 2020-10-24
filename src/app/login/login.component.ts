import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LoginRequest} from '../interface/login-request';
import {LoginService} from '../service/login.service';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginRequest: LoginRequest;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log("load login");
    this.loginForm = this.fb.group({
      name: [''],
      password: ['']
    });
  }

  login() {
    console.log(this.loginForm.value)
    this.loginService.login(this.loginForm.value).subscribe(next => this.loginRequest = next, error => {console.log(error)}, () => {
      this.setToken(this.loginRequest.token);
      this.router.navigateByUrl('list')
      })
  }

  setToken(token: string) {
    sessionStorage.removeItem("token");
    sessionStorage.setItem("token", token);
  }

}
