import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BroodjesComponent } from './broodjes/broodjes.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from "./core";
import {
  HeaderComponent,
  FooterComponent,
  SharedModule
} from "./shared";

@NgModule({
  declarations: [
    AppComponent,
    BroodjesComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
