import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { ApiService } from './api.service';
import { User } from '../models';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

//check if user is authenticated
export class AuthService {

  // URL where to fetch users
  private usersUrl = 'ap/users/login';  // URL to web api

  constructor(private api: ApiService) { }



  //login user (checks if user with id and pw exists?
  login(username: string, password: string) {
  return this.api.post(this.usersUrl, {username: username, password: password})
  }



  //logout by removing user from local storage ?
  logout(){
    localStorage.removeItem('currentUser');
  }

}








