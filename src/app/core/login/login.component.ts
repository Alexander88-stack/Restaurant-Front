import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/interfaces/login-form.interface';
import Swal from 'sweetalert2';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formSubmited = false;

  public loginForm = this.fb.group({
      mail: ['',[Validators.required, Validators.minLength(3)]],
      password: ['',[Validators.required]],
      remember: [false]
  })

  constructor(  private router: Router, 
                private fb: FormBuilder,
                private loginService: LoginService ) { }

  ngOnInit(): void {
    
  }
  login() {
    
      this.loginService.login( this.loginForm.value )
        .subscribe( res => {
          console.log(res)
          
        }, (error) => {
          Swal.fire('Error', error.error.msg, 'error')
        })
        return this.router.navigateByUrl('/')
  }      
  logout() {
    this.loginService.logout();
  }      
  
}
