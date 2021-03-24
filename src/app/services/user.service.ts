import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private HttpClient: HttpClient) {}

  updateUserdata(id: number, email: string, username: string) {
    return this.HttpClient.put(environment.baseUrl + '/api/public/api/user/' + id, {
      id: id,
      email: email,
      username: username,
    });
  }
}
