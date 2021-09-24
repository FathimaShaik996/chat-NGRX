import { createAction, props } from '@ngrx/store';
import { Message } from '../../message';

export const RETRIEVE_CONTACTS_SUCCESS =
  '[url contacts] load url contact success';
export const SET_MESSAGES = '[url messages] load messages';

export const retrieveContactsSuccess = createAction(
  RETRIEVE_CONTACTS_SUCCESS,
  props<{ contacts: Message[] }>()
);
