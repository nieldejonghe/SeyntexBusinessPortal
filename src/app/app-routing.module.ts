import { NgModule } from '@angular/core';
import { BroodjesComponent } from './broodjes/broodjes.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'broodjes' , component: BroodjesComponent}
  ];

@NgModule({
  exports: [ RouterModule ],

  // why this ?
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
