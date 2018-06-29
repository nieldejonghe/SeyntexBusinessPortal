import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { environment } from '../../environments/environment';
import { ApiService, BroodjeService, InMemoryDataService} from './services';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    // Only emulate a data server when developing!
    !environment.production ? HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 100 }) : []
  ],
  providers: [
    ApiService,
    BroodjeService
  ],
  declarations: []
})
export class CoreModule { }
