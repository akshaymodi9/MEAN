import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { AddContactComponent } from '../../components/add-contact/add-contact.component';

const route:Routes=[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'add',
    component:AddContactComponent
  }

]


@NgModule({
  imports: [
   RouterModule.forRoot(route)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class ContactRouteModule { }
