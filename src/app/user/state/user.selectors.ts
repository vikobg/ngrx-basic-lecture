import { createSelector, createFeatureSelector } from '@ngrx/store';
import {userFeatureKey, UserState} from './user.reducer';

export interface UserPartialState {
  [userFeatureKey]: UserState;
}

export const userState = createFeatureSelector<UserPartialState, UserState>(userFeatureKey);

export const getUsers = createSelector(
  userState,
  (state: UserState) => state.users
);

export const getUsersLoaded = createSelector(
  userState,
  (state: UserState) => state.usersLoaded
);

export const getDeletingUserId = createSelector(
  userState,
  (state: UserState) => state.deletingUser
);
