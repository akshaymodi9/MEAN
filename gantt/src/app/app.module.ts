import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GanttModule } from 'ng2-gantt';
import { AppComponent } from './app.component';
import { GanttChart } from 'angular-gantt-chart';
// import { GanttModule } from 'angular2-ganttchart';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GanttChart
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
