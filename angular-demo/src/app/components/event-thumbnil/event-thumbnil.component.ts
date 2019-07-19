import { Component, Input } from '@angular/core';
import { EventInfo } from "../../models/eventinfo";

@Component({
  selector: 'event-thumbnil',
  templateUrl: './event-thumbnil.component.html',
  styleUrls: ['./event-thumbnil.component.css']
})
export class EventThumbnilComponent {

  @Input()
  private eventdata:EventInfo;
  constructor() { }

}
