import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map, flatMap } from 'rxjs/operators'
import {AuthService, OrderService} from '../core/services';
import {User, Order} from '../core/models';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  user: User;
  userOrders: Order[] = [];
  orders: Order[] = [];

  constructor(private authservice: AuthService, private orderservice: OrderService) { }

  ngOnInit() {
    // Do both requests in parallel. Should be done by the resolver really
    return forkJoin(
      this.authservice.getUserInfo()
        .pipe(
          map((user: User) => {
            console.log(user);
            return this.user = user }),
          // Return a new Observable to fetch the orders from this user
          flatMap((user) => {
            console.log(user);
            return this.orderservice.getOrderbyUserId(this.user.id)}),
          // Resolve the fetched order
          map((order: Order[]) => {
            console.log(order)
            return this.userOrders = order})
        ),
        this.getOrders()
    ).subscribe()
  }



  getOrders() {
    return this.orderservice.getOrders()
      .pipe(
        map((orders) => {
          this.orders = orders;
        console.log(orders)}
        )
      );
  }

}
