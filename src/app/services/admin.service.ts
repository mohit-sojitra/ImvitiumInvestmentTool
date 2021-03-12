import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../..//environments/environment';
import { UserListModel } from '../interfaces/userlist.model';
@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getUserlist(pageNumber: number, searchQuery: string) {
    return this.http.get<UserListModel>(
      environment.baseUrl+'/api/public/api/userlist?page=' +
        pageNumber +
        '&search=' +
        searchQuery
    );
  }

  getUserlistByType(
    pageNumber: number,
    searchQuery: string,
    accountType: string
  ) {
    return this.http.get<UserListModel>(
      environment.baseUrl+'/api/public/api/userlist/' +
        accountType +
        '?page=' +
        pageNumber +
        '&search=' +
        searchQuery
    );
  }
}
