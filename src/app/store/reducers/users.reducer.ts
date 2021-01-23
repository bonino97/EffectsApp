import { User } from './../../models/user.model';
import { createReducer, on } from '@ngrx/store';
import * as usersActions from '../actions';

export interface UsersState {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usersInitialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

const _usersReducer = createReducer(
  usersInitialState,

  on(usersActions.loadUsers, (state) => ({ ...state, loading: true })),

  on(usersActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...users],
  })),

  on(usersActions.loadUsersErrors, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
    },
  }))
);

export function usersReducer(state: any, action: any) {
  return _usersReducer(state, action);
}
