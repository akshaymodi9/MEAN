import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router'
import { RegisterComponent } from '../../components/register/register.component';
import { LoginComponent } from '../../components/login/login.component';

const route:Routes=[{

  path:'login',
  component:LoginComponent
},{
  path:'register',
  component:RegisterComponent
}]
@NgModule({
  imports: [
   RouterModule.forRoot(route)
  ],
  exports:[
RouterModule
  ],
  declarations: []
})
export class RoutesModule { }
