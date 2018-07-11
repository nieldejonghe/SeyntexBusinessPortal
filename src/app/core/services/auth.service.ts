import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { ApiService } from './api.service';
import { User } from '../models';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//check if user is authenticated
export class AuthService {

  // URL where to fetch users
  private usersUrl = 'api/users/login';  // URL to web api


  //BehaviourSubject holds the value, used to change menu items on navbar when login/logout
  //making the observable here so it doesn't create a new observable in the method that returns this observable
  private loggedInSubj = new BehaviorSubject<boolean>(false);

  private loggedIn$ = this.loggedInSubj.asObservable()


  constructor(private api: ApiService) { }

  //login user (checks if user with id and pw exists?
  login(username: string, password: string) {

  return this.api.post(this.usersUrl, {username: username, password: password})
    .pipe(map( (user) => {
        if (user && user.token) {
          console.log("token stored" + user.token);
          //adds user to local storage so user keeps session in between browsing pages
          localStorage.setItem('loggedUser', JSON.stringify(user));
          this.loggedInSubj.next(this.getUserSession());
        }
        return user // Return for further chaining
      })
    )
  }

  //logout by removing user from local storage
  logout(){
    localStorage.removeItem('loggedUser');
    this.loggedInSubj.next(this.getUserSession());
  }

  //getting usersession
  // '!!' = casting to boolean
  getUserSession(): boolean{
    return !!localStorage.getItem('loggedUser');

  }

  //method to return state Behavioursubject loggedin, used to change menu items on navbar when login /logout

  //don't return asObservable since this will create a new observable everytime you call this method
  isLoggedin(){
    return this.loggedIn$

  }




}








