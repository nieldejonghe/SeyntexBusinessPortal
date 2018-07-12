import { Component, OnInit } from '@angular/core';
import {AuthService, OrderService} from '../core/services';
import {User, Order} from '../core/models';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  user: User;
  order: Order;

  constructor(private authservice: AuthService, private orderservice: OrderService) { }

  ngOnInit() {

    this.authservice.getUserInfo().subscribe((user_info: User) => this.user = user_info);
    this.orderservice.getOrderbyUserId(this.user.id).subscribe((order_info: Order) => this.order = order_info);
  }

}
