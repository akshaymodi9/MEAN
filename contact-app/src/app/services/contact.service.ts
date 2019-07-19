import { Injectable } from '@angular/core';
import { Contact } from '../components/models/contact';


@Injectable()
export class ContactService {

  private  contacts:Contact[];
  constructor() {

    this.contacts=[
      {
        name:'Akshay',
        no:7208119099
      },
      {
        name:'Shaun',
        no:8169965433
      }

    ]

   }

   public getContacts():Contact[]{

    return this.contacts
   }

   public addContact(contact){
  
    this.contacts.push(contact);
    
   }

}
