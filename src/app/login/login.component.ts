import { Component, OnInit } from '@angular/core';
import { AuthService} from '../core/services';
import {User} from '../core/models';
import {Router} from '@angular/router';
import {UserService} from '../core/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private authservice: AuthService, private router: Router) {
  }

  ngOnInit() {
    // reset login status
    this.authservice.logout();
  }


  login(username: string, password: string): void {
    console.log(username, password)

    //validates user based on username and password
    this.authservice.login(username, password).subscribe((user) => {this.user = user;console.log(user)});

    //after login go to a page
    this.router.navigate(['/']);
  }
}








