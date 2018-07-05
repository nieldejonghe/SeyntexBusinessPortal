import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {
  Errors,
  Credentials,
  UserService } from '../core';

enum AuthTypes {
  Login = 'login',
  Register = 'register'
}

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  authTypes = AuthTypes;
  authType: string = '';
  title: string = '';
  errors: Errors = {errors: {}};
  isSubmitting = false;
  authForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.url.subscribe(data => {
      // Get the last piece of the URL (it's either 'login' or 'register')
      this.authType = data[data.length - 1].path;
      // Set a title for the page accordingly
      this.title = (this.authType === AuthTypes.Login) ? 'Sign in' : 'Sign up';
      // add form control for username if this is the register page
      if (this.authType === AuthTypes.Register) {
        this.authForm.addControl('email', new FormControl());
      }
    });
  }

  submitForm() {
    this.isSubmitting = true;
    this.errors = {errors: {}};

    const credentials:Credentials = this.authForm.value;
    const func = this.authType === AuthTypes.Login ? this.userService.login : this.userService.register;
    func.call(this.userService, credentials)
    .subscribe(
      (data) => this.router.navigateByUrl('/'),
      (err:string) => {
        this.errors = {errors: {'Can\'t login': err}};
        this.isSubmitting = false;
      }
    );
  }
}
