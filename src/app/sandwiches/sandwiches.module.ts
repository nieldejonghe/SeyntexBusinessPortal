import { NgModule } from '@angular/core';

import { SandwichesComponent } from './sandwiches.component';
import { SharedModule } from '../shared';
import { SandwichRoutingModule } from './sandwiches-routing.module';

@NgModule({
  imports: [
    SharedModule,
    SandwichRoutingModule
  ],
  declarations: [
    SandwichesComponent
  ],
  providers: [
  ]
})
export class SandwichesModule {}
