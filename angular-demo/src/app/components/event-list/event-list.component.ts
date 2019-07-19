import { Component } from '@angular/core';
import { EventInfo } from "../../models/eventinfo";
import { EventService } from "../../services/event.service";

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {

  private events: EventInfo[];
  // constructor() {
  //   this.events = [

  //     {
  //       id: 1,
  //       title: 'Developing SPA with angular 2',
  //       location: 'Pune',
  //       startTime: '10.00 AM',
  //       endTime: '5.00 PM',
  //       eventDate: new Date(2017, 9, 20),
  //       speakers: ['Swapnil', 'sonu'],
  //       price: 1500,
  //       offerPrice: 1000
  //     },
  //     {
  //       id: 2,
  //       title: 'Mobile application with JS',
  //       location: 'Mumbai',
  //       startTime: '10.00 AM',
  //       endTime: '6.00 PM',
  //       eventDate: new Date(2017, 9, 22),
  //       speakers: ['Swapnil', 'sonu'],
  //       price: 3000,
  //       offerPrice: 2000
  //     },
  //     {
  //       id: 3,
  //       title: 'Cloud Computing',
  //       location: 'Banglore',
  //       startTime: '9.00 AM',
  //       endTime: '5.00 PM',
  //       eventDate: new Date(2017, 10, 15),
  //       speakers: ['Rama', 'sonu'],
  //       price: 5400,
  //       offerPrice: 3500
  //     },
  //     {
  //       id: 4,
  //       title: 'Office 365 Administration',
  //       location: 'Chennai',
  //       startTime: '11.00 AM',
  //       endTime: '7.00 PM',
  //       eventDate: new Date(2017, 9, 19),
  //       speakers: ['Swapnil', 'Rama'],
  //       price: 2000,
  //       offerPrice: 1800
  //     },
  //     {
  //       id: 5,
  //       title: 'Hacking ',
  //       location: 'Navi Mumbai',
  //       startTime: '11.00 AM',
  //       endTime: '5.00 PM',
  //       eventDate: new Date(2017, 9, 10),
  //       speakers: ['Swapnil', 'sonu'],
  //       price: 0,
  //       offerPrice: 0
  //     }
  //   ]


  // }

constructor(private eventSvc:EventService){

  this.events=this.eventSvc.getEvents()

}

}
