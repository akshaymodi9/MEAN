import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators, FormControl } from "@angular/forms";


@Component({
  selector: 'edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent  {

  private form:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.form=this.fb.group({

      'title':new FormControl('',Validators.compose([Validators.required,Validators.minLength(5)])),
      'location':new FormControl('',Validators.compose([Validators.required,Validators.minLength(3)])),
      'eventDate':['',Validators.required],
      'startTime':['',Validators.required],
      'endTime':['',Validators.required],
      'price':['',Validators.compose([Validators.required,Validators.min(1000),Validators.max(5000)])],
      'offerPrice':['',Validators.compose([Validators.required,Validators.min(1000),Validators.max(5000)])],
      'speakers':['',Validators.compose([Validators.required,Validators.min(2)])]
    })


  }



}
