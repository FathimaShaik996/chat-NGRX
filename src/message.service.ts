import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { retrieveContactsSuccess } from './app/store/contact-list.action';
import { Message } from './message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  url =
    'https://raw.githubusercontent.com/NablaT/test-api/master/assets/messages.json.txt';
  getAllMessage = [];
  messages = [];
  storeAllMessages$ = new BehaviorSubject([]);
  allContacts = [];
  constructor(private http: HttpClient, private store: Store<Message[]>) {
    this.contactList();
  }
  getContactList() {
    return this.http.get<Message[]>(this.url);
  }

  contactList() {
    return this.http.get<Message[]>(this.url).subscribe((data) => {
      this.allContacts = data;
      console.log(this.allContacts, 'contacts');
      this.store.dispatch(
        retrieveContactsSuccess({ contacts: this.allContacts })
      );
    });
  }
}
