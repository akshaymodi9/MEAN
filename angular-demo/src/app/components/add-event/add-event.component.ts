import { Component } from '@angular/core';
import { EventInfo } from "../../models/eventinfo";

@Component({
  selector: 'add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {

  private eventInfo: EventInfo = new EventInfo();
  private tmp_speakers: string;
  private status: any = {
    message: "",
    valid: true
  };
  private clicked=true
  constructor() {

  }

  save(form) {

    if (form.valid) {
      this.clicked=true
      this.eventInfo.speakers = this.tmp_speakers.split('\n')
      // console.log(form.value)
      //console.log(this.eventInfo)
      // console.log()
      //send data to rest api
      this.status.message = "saved successfully";
      this.status.valid = true
    } else {
      this.clicked=true
      
      this.status.message = "Error Cannot submit data";
      this.status.valid = false
    }

  }
  public reset(){
    this.clicked=false
  }

}
