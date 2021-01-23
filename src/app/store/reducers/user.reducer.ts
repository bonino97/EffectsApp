import { User } from './../../models/user.model';
import { createReducer, on } from '@ngrx/store';
import * as userActions from '../actions';

export interface UserState {
  id: string;
  user: User;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const userInitialState: UserState = {
  id: '',
  user: null as any,
  loaded: false,
  loading: false,
  error: null,
};

const _userReducer = createReducer(
  userInitialState,

  on(userActions.loadUser, (state, { id }) => ({
    ...state,
    loading: true,
    id: id,
  })),

  on(userActions.loadUserSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: { ...user },
  })),

  on(userActions.loadUserError, (state, { payload }) => ({
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

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}
