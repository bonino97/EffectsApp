import { User } from './../../models/user.model';
import { createAction, props } from '@ngrx/store';

export const loadUser = createAction(
  '[User] Load User by Id',
  props<{ id: string }>()
);

export const loadUserSuccess = createAction(
  '[User] Load User with Success',
  props<{ user: User }>()
);

export const loadUserError = createAction(
  '[User] Load User Errors',
  props<{ payload: any }>()
);
