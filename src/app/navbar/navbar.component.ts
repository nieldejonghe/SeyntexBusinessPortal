import { Component, OnInit } from '@angular/core';
import { AuthService} from '../core/services';

import {User} from '../core/models';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  loggedin: boolean;
  user: User;


  constructor(private authservice: AuthService) { }

  ngOnInit() {

    this.authservice.isLoggedin().subscribe((logged_in: boolean) => this.loggedin = logged_in);

    //using the public variable instead of the method
    this.authservice.loggedInUser$.subscribe((user_info: User) => this.user = user_info);


  }

  logout(){
    this.authservice.logout();
  }

}
