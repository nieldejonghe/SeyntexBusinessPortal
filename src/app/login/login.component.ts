import { Component, OnInit } from '@angular/core';
import { AuthService} from '../core/services';
import {User} from '../core/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user: User;

  constructor(private authservice: AuthService) {
  }

  ngOnInit() {
    // reset login status
    this.authservice.logout();
  }


  login(username: string, password: string): void {
    console.log(username, password)
    this.authservice.login(username, password).subscribe((user) => {
      this.user = user;
      console.log(user)
    })
  }
}








