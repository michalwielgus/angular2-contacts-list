import { Component, Input } from '@angular/core';
import { Contact } from '../contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html'
})
export class ContactsListComponent {
  @Input() contacts: Array<Contact>;
}
