import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})




export class OrdersService {
  

  
  newOrder =[];

  constructor(private http: HttpClient) { }



  

   postRandomNewOrder(newOrder: any): Observable<any> {
     return this.http.post( 'http://localhost:3000/orders', newOrder)
     
   }
   
}




