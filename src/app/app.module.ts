import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { SummaryComponent } from './modules/account/summary/summary.component';

// Main Routes
import { MAIN_ROUTES } from './app.routes';

// Services
import { UserService } from './modules/security/services/user.service';


import { LoginComponent } from './modules/security/login/login.component';
import { CreateUserComponent } from './modules/security/create-user/create-user.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    SummaryComponent,
    LoginComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    MAIN_ROUTES
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
