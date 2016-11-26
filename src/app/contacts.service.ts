import { Injectable } from '@angular/core';

export interface Contact {
    id: number;
    name: string;
    age: number;
    email: string;
}

@Injectable()
export class ContactsService {
    contacts: Array<Contact> = [
        {
            id: 1,
            name: 'Michal Wielgus',
            age: 27,
            email: 'wielgus.michaal@gmail.com'
        },
        {
            id: 2,
            name: 'Paulina Mięculewicz',
            age: 25,
            email: 'paulina2904@o2.pl'
        }
    ];
}
