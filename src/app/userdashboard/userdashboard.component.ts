import { Component, OnInit } from '@angular/core';
import {AuthService} from '../core/services';
import {User} from '../core/models';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {


  user: User;
  constructor(private authservice: AuthService) { }

  ngOnInit() {

    this.authservice.getUserInfo().subscribe((user_info: User) => this.user = user_info)
  }

}
