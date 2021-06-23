import { NgIfContext } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../../models/user.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  log!: FormGroup;
  user: UserModel = new UserModel();
  postId: any [] = [];


  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.createForm();
  }
   
  createForm(): void {
    this.log = this.fb.group({
      username: ['',[Validators.required]],
      mail: ['',[Validators.required, Validators.minLength(3)]],
      password: ['',[Validators.required]],
      password2: ['',[Validators.required]]
      
    })
  }

  saveForm(): void {
    console.log(this.log);

    this.http.post<any>('http://localhost:3000/users', {
      username: this.log.value.username,
      mail: this.log.value.mail,
      password: this.log.value.password,
      
    }
    
    ).subscribe(data => {
      console.log('La respuesta es', data);

      localStorage.setItem('token', data.token);
      this.postId = data;

       this.router.navigateByUrl('/');
      
    })

    
    
  };
  


}
