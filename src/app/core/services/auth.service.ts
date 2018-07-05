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
  private usersUrl = 'api/users/login';  // URL to web api

  constructor(private api: ApiService) { }



  //login user (checks if user with id and pw exists?
  login(username: string, password: string) {
  return this.api.post(this.usersUrl, {username: username, password: password})
    .pipe(map( (user) => {
        if (user && user.token) {
          console.log("token stored" + user.token);
          localStorage.setItem('loggedUser', JSON.stringify(user));
        }
        return user // Return for further chaining
      })
    )


//GIMMEH USER PLX

    //if there is a user returned and user has token store details and jwt token in local storage to keep user logged in between pages
    //if(this.user && this.user.token){
      //console.log(this.user.token);
      //localStorage.setItem('loggedUser', JSON.stringify(user));
    //}
  //})

  }



  //logout by removing user from local storage ?
  logout(){
    localStorage.removeItem('currentUser');
  }

}








