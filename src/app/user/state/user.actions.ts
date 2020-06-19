import { createAction, props } from '@ngrx/store';
import {User} from './user.types';

export const fetchUsers = createAction('[User] Fetch Users');
export const fetchUsersSuccess = createAction('[User] Fetch Users Success', props<{users: User[]}>());
export const fetchUsersError = createAction('[User] Fetch Users Error', props<{error: any}>());
export const deleteUser = createAction('[User] Delete User', props<{id: number}>());
export const deleteUserSuccess = createAction('[User] Delete User Success', props<{id: number}>());
export const deleteUserError = createAction('[User] Delete User Error', props<{error: any}>());
