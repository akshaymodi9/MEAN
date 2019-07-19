import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { RouterModule } from '@angular/router';
import { ContactRouteModule } from './modules/contact-route/contact-route.module';
import { ContactService } from './services/contact.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ContactRouteModule,
    ReactiveFormsModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
