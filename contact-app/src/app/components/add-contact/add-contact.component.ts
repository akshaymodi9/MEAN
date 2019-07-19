import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { ContactService } from '../../services/contact.service';
@Component({
  selector: 'add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  private form: FormGroup;
  constructor(private fb: FormBuilder, private contactSvc: ContactService) {

    this.form = this.fb.group({

      'name': ['', Validators.required],
      'no': ['', Validators.required]

    })


  }

  ngOnInit() {
  }

  public add() {
    if (this.form.valid) {
      console.log(this.form.value)
     let obj={
       'name':this.form.value.name,
       'no':this.form.value.no
      }
      this.contactSvc.addContact(obj);
    }
  }
}
