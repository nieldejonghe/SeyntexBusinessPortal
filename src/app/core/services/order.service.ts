import { Injectable } from '@angular/core';
import { ApiService} from './api.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

import {Order} from '../models';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderUrl = "api/orders";

  constructor(private api: ApiService) { }

  getOrders(): Observable<Order[]> {
    return this.api.get(this.orderUrl);
  }


  getOrderbyUserId(userid: number){

    const url = `${this.orderUrl}/?userid=${userid}`;
    console.log(url);
    return this.api.get(url);
  }

  updateOrder(order: Order) {
    return this.api.put(this.orderUrl+ order.id, order);
  }

  addOrder(order: Order): Observable<Order>{
    return this.api.post(this.orderUrl, order).pipe(tap((order: Order) => console.log(`added order w/ id=${order.id}`)));
  }

  //deleteOrder(order: Order): Observable<Order>{
    //return this.api.delete(this.orderUrl, order);
  //}
}
