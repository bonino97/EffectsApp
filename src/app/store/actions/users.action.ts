import { User } from './../../models/user.model';
import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction('[Users] loadUsers');

export const loadUsersSuccess = createAction(
  '[Users] Load Users with Success',
  props<{ users: User[] }>()
);

export const loadUsersErrors = createAction(
  '[Users] Load Users Errors',
  props<{ payload: any }>()
);
