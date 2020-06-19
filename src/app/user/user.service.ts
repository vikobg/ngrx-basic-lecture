import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UsersResponse} from './state/user.types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<UsersResponse>('https://reqres.in/api/users');
  }

  delete(id: number) {
    return this.http.delete<UsersResponse>(`https://reqres.in/api/users/${id}`);
  }
}
