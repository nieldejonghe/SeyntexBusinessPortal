import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { ApiService } from './api.service';
import { User } from '../models';


@Injectable({
  providedIn: 'root'
})

//check if user is authenticated
export class AuthService {

  // URL where to fetch users
  private usersUrl = 'api/users';  // URL to web api

  constructor(private api: ApiService) { }


  login(username: string, password: string) {

  //return this.api.post<any>(usersUrl, {username: username, password: password});

  //return user;
  }

}








