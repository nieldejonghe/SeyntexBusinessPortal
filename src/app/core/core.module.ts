import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// HttpClientModule is required for the inmemorywebapi. Normally put into shared module and exported
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { environment } from '../../environments/environment';
import { ApiService, BroodjeService, InMemoryDataService, AuthService, OrderService} from './services';
import {UserService} from './services/user.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    // Only emulate a data server when developing!
    !environment.production ? HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 100 }) : []
  ],
  providers: [
    ApiService,
    BroodjeService,
    AuthService,
    UserService,
    OrderService
  ],
  declarations: []
})
export class CoreModule { }
