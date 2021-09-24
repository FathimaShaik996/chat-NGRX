import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactListComponent } from '../contact-list/contact-list.component';
import { MessageDetailsComponent } from '../message-details/message-details.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { contactReducer } from './store/contact-list.reducer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      contacts: contactReducer,
      // messages: contactReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  declarations: [AppComponent, ContactListComponent, MessageDetailsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
