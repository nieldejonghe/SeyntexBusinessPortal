import { Component, OnInit } from '@angular/core';

import { UserService, BroodjeService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string= 'Seyntex Business Portal alpha v1.0';

  constructor(
    private userService: UserService,
    private broodjsService: BroodjeService
  ) { }

  ngOnInit() {
    this.userService.populate()  // Kick off user related items on startup
    this.userService.login({username:'admin2', password:'admin'}).subscribe((user) => console.log(user))
    // this.broodjsService.getBroodje(100).subscribe((broodje) => console.log(broodje))
  }
}
