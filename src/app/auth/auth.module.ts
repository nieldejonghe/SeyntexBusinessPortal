import { NgModule } from '@angular/core';

import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [
    AuthComponent
  ],
  providers: []
})
export class AuthModule {}
