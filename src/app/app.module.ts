import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { GravatarComponent } from './gravatar/gravatar.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    ContactItemComponent,
    GravatarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
