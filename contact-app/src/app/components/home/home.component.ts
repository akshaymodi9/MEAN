import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../models/contact';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private contacts:Contact[];
  
  constructor(private contactSvc:ContactService) { 

    this.contacts=this.contactSvc.getContacts()
  }

  ngOnInit() {
  }

}
