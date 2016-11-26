import { Component, Input } from '@angular/core';
import { Contact } from '../contacts.service';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html'
})
export class ContactItemComponent {
  @Input() contact: Contact;
}
