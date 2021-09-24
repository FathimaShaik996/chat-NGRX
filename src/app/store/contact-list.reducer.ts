import { createReducer, on } from '@ngrx/store';
import { Message } from '../../message';
import { retrieveContactsSuccess } from './contact-list.action';

const initialState: Message[] = [];

const _contactReducer = createReducer(
  initialState,

  on(retrieveContactsSuccess, (state, payload) => payload.contacts)
);

export function contactReducer(state, action) {
  return _contactReducer(state, action);
}
