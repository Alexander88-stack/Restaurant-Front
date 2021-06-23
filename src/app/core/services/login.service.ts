import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm } from 'src/app/interfaces/login-form.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login ( formData: LoginForm ) {
      return this.http.post<any>('http://localhost:3000/login', formData) 
}
  logout() {
    localStorage.removeItem('token')
  }    
  
}
