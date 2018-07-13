import { Component, OnInit } from '@angular/core';
import {AuthService, OrderService} from '../core/services';
import {User, Order} from '../core/models';
import {forkJoin} from 'rxjs';
import { map, flatMap } from 'rxjs/operators'

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  user: User;
  orders: Order[];

  constructor(private authservice: AuthService, private orderservice: OrderService) { }

  ngOnInit() {
    //This doesn't work since user doesn't load fast enough before view binds to model, needs sync call
    //this.authservice.getUserInfo().subscribe((user_info: User) => this.user = user_info);
    //this.orderservice.getOrderbyUserId(this.user.id).subscribe((order_info: Order) => this.order = order_info);
    //this.getOrders()

    //this works sincs getCurrentUser is a sync call
    this.user = this.authservice.getCurrentUser();
    this.orderservice.getOrderbyUserId(this.user.id).subscribe((order_info: Order[]) => this.orders = order_info);


  }



}
