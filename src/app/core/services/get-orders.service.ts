import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})




export class GetOrdersService {

  
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')


  orders = [];
  

  constructor(private http: HttpClient) { }

   getRandomOrder(): Observable<any> {

  
    
    return this.http.get("http://localhost:3000/orders")
     
   }
   
   

   
}
    
    
      
      
      



    

