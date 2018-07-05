import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SandwichesComponent } from './sandwiches/sandwiches.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from "./core";
import {
  HeaderComponent,
  FooterComponent,
  SharedModule
} from "./shared";
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    SandwichesComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
