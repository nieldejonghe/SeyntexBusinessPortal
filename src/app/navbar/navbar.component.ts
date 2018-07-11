import { Component, OnInit } from '@angular/core';
import { AuthService} from '../core/services';
import {Observable} from 'rxjs';
import {UserService} from '../core/services/user.service';
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
    this.authservice.getUserInfo().subscribe((user_info: User) => this.user = user_info);

  }

  logout(){
    this.authservice.logout();
  }

}
