import { Component, Input } from '@angular/core';
import { EventInfo } from "../../models/eventinfo";
import { EventService } from "../../services/event.service";

@Component({
  selector: 'event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.css']
})
export class EventSearchComponent  {

  
  private searchResult:EventInfo[]=[];
  private eventSvc:EventService;
  
  constructor(eventService:EventService) {
    this.eventSvc=eventService;
   }  

   public search(loc){

    this.searchResult=this.eventSvc.searchEvents(loc.value)
   }
  }

