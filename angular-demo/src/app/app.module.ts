import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home/home.component";
import { EmployeesComponent } from "./components/employees/employees.component";

import { EventListComponent } from './components/event-list/event-list.component';
import { EventThumbnilComponent } from './components/event-thumbnil/event-thumbnil.component';
import { EventSearchComponent } from './components/event-search/event-search.component';
import { EventService } from "./services/event.service";
import { EventRouteModule } from "./app-routes.module";
import { AddEventComponent } from "./components/add-event/add-event.component";
import { MaximumValidatorDirective } from "./validators/max.validator";
import { MinimumValidatorDirective } from "./validators/min.validator";
import { EditEventComponent } from "./components/edit-event/edit-event.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeesComponent,
    EventListComponent,
    EventThumbnilComponent,
    EventSearchComponent,
    AddEventComponent,
    MaximumValidatorDirective,
    MinimumValidatorDirective,
    EditEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EventRouteModule,
    ReactiveFormsModule,
    NgbModule.forRoot()

  ],
  providers: [
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
