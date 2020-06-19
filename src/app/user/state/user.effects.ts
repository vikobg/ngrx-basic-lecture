import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of} from 'rxjs';
import {map, mergeMap, catchError, delay} from 'rxjs/operators';
import {deleteUser, deleteUserError, deleteUserSuccess, fetchUsers, fetchUsersError, fetchUsersSuccess} from './user.actions';
import {UserService} from '../user.service';

@Injectable()
export class UserEffects {
  fetchUsers$ = createEffect(() => this.actions$.pipe(
    ofType(fetchUsers),
    mergeMap(() => this.userService.getAll()
      .pipe(
        map(usersResponse => fetchUsersSuccess({ users: usersResponse.data })),
        catchError(error => of(fetchUsersError({ error })))
      ))
    )
  );

  deleteUser$ = createEffect(() => this.actions$.pipe(
    ofType(deleteUser),
    mergeMap(({ id }) => this.userService.delete(id)
      .pipe(
        map(usersResponse => deleteUserSuccess({ id })),
        catchError(error => of(deleteUserError({ error })))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
