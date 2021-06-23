import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrdersService } from '../services/orders.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


// Aunque pone sign-in, esta pagina se esta utilizando para mandar la informacion de las comandas 
// a la base de datos !!!

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  post: any[] = [];
  nameAndRol: any[] = [];
  table: any[] = [];
  products: any[] = [];
  persons: any[] = [];
  
  forma!: FormGroup;

  


  constructor(private order: OrdersService, private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.createForm();
    
  };

  createForm(): void {
    this.forma = this.fb.group({
      nameAndRol: [''],
      table: [''],
      products: [''],
      persons: ['']
    })
    
  }

  saveForm(): any {
    this.forma;
    console.log(this.forma);
    
    this.http.post<any>('http://localhost:3000/orders', 
    { 
         
        nameAndRol: this.forma.value.nameAndRol,
        table: this.forma.value.table,
        products: this.forma.value.products,
        persons: this.forma.value.persons
        
   
      }).subscribe(data  => {
        
        console.log('La respuesta es', data);
        
            this.post = data;
    });
 
  }
}
 