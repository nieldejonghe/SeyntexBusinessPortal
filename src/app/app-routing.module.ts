import { NgModule } from '@angular/core';
import { BroodjesComponent } from './broodjes/broodjes.component';
import { LoginComponent} from './login/login.component';
import { UserdashboardComponent} from './userdashboard/userdashboard.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path: 'broodjes' , component: BroodjesComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'userdashboard' , component: UserdashboardComponent}
  ];

@NgModule({
  exports: [ RouterModule ],

  // Initializing router: starts listening for browser location changes
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
