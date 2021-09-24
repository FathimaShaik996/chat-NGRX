import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Message } from '../message';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  contacts$: Observable<Message[]>;
  constructor(
    private messageService: MessageService,
    private store: Store<{ contacts: Message[] }>
  ) {}

  ngOnInit() {
    this.contacts$ = this.store.select('contacts');
  }
}
