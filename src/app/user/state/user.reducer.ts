import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import {User} from './user.types';

export const userFeatureKey = 'user';

export interface UserState {
  users: User[];
  usersLoaded: boolean;
  deletingUser?: number;
  error?: any;
}

export const initialState: UserState = {
  users: [],
  usersLoaded: false
};

const userReducer = createReducer(
  initialState,
  on(UserActions.fetchUsers, state => ({
    ...state,
    users: [],
    usersLoaded: false,
    error: undefined
  })),
  on(UserActions.fetchUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    usersLoaded: true,
    error: undefined
  })),
  on(UserActions.fetchUsersError, (state, { error }) => ({
    ...state,
    error
  })),
  on(UserActions.deleteUser, (state, { id }) => ({
    ...state,
    deletingUser: id
  })),
  on(UserActions.deleteUserSuccess, (state, { id }) => ({
    ...state,
    users: state.users.filter(user => user.id !== id),
    deletingUser: undefined
  })),
  on(UserActions.deleteUserError, (state, { error }) => ({
    ...state,
    error
  })),
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}
