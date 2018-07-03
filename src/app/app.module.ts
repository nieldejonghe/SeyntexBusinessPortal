import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { BroodjesComponent } from './broodjes/broodjes.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from "./core";
import { SharedModule} from "./shared";
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BroodjesComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
