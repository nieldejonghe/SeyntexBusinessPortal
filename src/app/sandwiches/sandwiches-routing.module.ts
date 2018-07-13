import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SandwichesComponent } from './sandwiches.component';
import { AuthGuard } from '../core'

const routes: Routes = [
  {
    path: '',
    component: SandwichesComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SandwichRoutingModule {}
