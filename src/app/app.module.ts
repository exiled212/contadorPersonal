import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { SummaryComponent } from './modules/account/summary/summary.component';

// Main Routes
import { MAIN_ROUTES } from './app.routes';
import { LoginComponent } from './modules/security/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    SummaryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MAIN_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
