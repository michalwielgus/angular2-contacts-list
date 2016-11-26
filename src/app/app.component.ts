import { Component, OnInit } from '@angular/core';
import { ContactsService, Contact } from './contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ContactsService]
})
export class AppComponent {
  title = 'Contacts List';
  contacts: Array<Contact>;

  ngOnInit() {
    this.contacts = this.contactsService.contacts;
  };
  constructor(private contactsService: ContactsService) {}
}
