import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { RoutesModule } from './modules/routes/routes.module';
import { UserService } from './services/user.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    HttpModule,
    NgxPermissionsModule.forRoot()
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
