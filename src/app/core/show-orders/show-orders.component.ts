import { Component, OnInit } from '@angular/core';
import { GetOrdersService } from '../services/get-orders.service';
import {enableProdMode} from '@angular/core';


@Component({
  selector: 'app-show-orders',
  templateUrl: './show-orders.component.html',
  styleUrls: ['./show-orders.component.css']
})


export class ShowOrdersComponent implements OnInit {

       
  orderList: any[] = [{}];

  constructor(private orders: GetOrdersService) { }

  ngOnInit(): void {
    this.orders.getRandomOrder()

    .subscribe((data: any) => {
      
      console.log('Here you have your tables', data as string[]);
      this.orderList =  data;
       
      
    })
  }

  objectKeys (objeto: any) {
    const keys = Object.keys(objeto);
    console.log(keys); 
    return keys;
 }
 

}
enableProdMode();