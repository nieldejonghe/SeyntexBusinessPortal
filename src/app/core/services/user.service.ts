import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../models';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//basic CRUD methods for managing users, interface between web & api
export class UserService {

  //url to api
  private usersUrl = 'api/users';  // URL to web api

  constructor(private api: ApiService) { }


  // Returns mocked data. Contents are found in in-memory-db.service

  getAllUsers(): Observable<User[]> {
    return this.api.get(this.usersUrl);
  }

  getUserById(id: number){
    return this.api.get(this.usersUrl + id);
  }

  getUserByInitials(initials: string){
    return this.api.get(this.usersUrl + initials);
  }

  updateUser(user: User) {
    return this.api.put(this.usersUrl+ user.id, user);
  }
}
