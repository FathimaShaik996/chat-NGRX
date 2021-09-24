import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { retrieveContactsSuccess } from '../app/store/contact-list.action';
import { Message } from '../message';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.css'],
})
export class MessageDetailsComponent implements OnInit {
  id: string;
  messagesForm: FormGroup;
  contacts = [];
  allContacts = [];
  messages = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private messageService: MessageService,
    private store: Store<{ contacts: Message[] }>
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.messagesForm = new FormGroup({
      message: new FormControl(),
    });
    this.store.select('contacts').subscribe((data) => {
      this.contacts = data;
      this.contacts.forEach((val) => {
        if (val.id == this.id) {
          this.messages = [];
          this.messages.push(val);
        }
      });
    });
  }
  sendMessage() {
    const message = this.messagesForm.value.message;
    if (message) {
      this.allContacts = Object.assign([], this.allContacts);
      this.allContacts.push(message);
      let user = this.contacts.find((val) => val.id === this.id);
      let values = JSON.parse(JSON.stringify(user));
      values.messageList = this.allContacts;
      let contactsList = [...this.contacts];
      let itemIndex = contactsList.findIndex((item) => item.id == this.id);
      contactsList[itemIndex] = values;
      console.log(values, 'dispatched value');
      this.store.dispatch(retrieveContactsSuccess({ contacts: contactsList }));
      this.messagesForm.reset();
    }
  }
}
