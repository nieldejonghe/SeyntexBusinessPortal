import { Component, OnInit } from '@angular/core';
import { AuthService} from '../core/services';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  loggedin$: Observable<boolean>;

  constructor(private authservice: AuthService) { }

  ngOnInit() {
    console.log("test");
    this.loggedin$ = this.authservice.isLoggedin();
    console.log(this.loggedin$);
  }

}
