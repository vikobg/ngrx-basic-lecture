import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {deleteUser, fetchUsers} from '../../state/user.actions';
import {getDeletingUserId, getUsers, getUsersLoaded, UserPartialState} from '../../state/user.selectors';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users$ = this.store.select(getUsers);
  deletingUserId$ = this.store.select(getDeletingUserId);
  usersLoaded$ = this.store.select(getUsersLoaded);

  constructor(private readonly store: Store<UserPartialState>) { }

  ngOnInit() {
    this.store.dispatch(fetchUsers());
  }

  deleteUser(id: number) {
    this.store.dispatch(deleteUser({ id }));
  }
}
