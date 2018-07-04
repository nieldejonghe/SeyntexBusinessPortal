import { NgModule } from '@angular/core';
import { SandwichesComponent } from './sandwiches/sandwiches.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'sandwiches' , component: SandwichesComponent}
  ];

@NgModule({
  exports: [ RouterModule ],

  // why this ?
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
