import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../..//environments/environment';
import { newsModel } from '../interfaces/news.model';
import { UserListModel } from '../interfaces/userlist.model';
@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getUserlist(pageNumber: number, searchQuery: string) {
    return this.http.get<UserListModel>(
      environment.baseUrl +
        '/api/public/api/userlist?page=' +
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
      environment.baseUrl +
        '/api/public/api/userlist/' +
        accountType +
        '?page=' +
        pageNumber +
        '&search=' +
        searchQuery
    );
  }

  getUpdates() {
    return this.http.get<newsModel[]>(
      environment.baseUrl + '/api/public/api/news'
    );
  }

  updateUpdates(id: number, update: string) {
    return this.http.put(environment.baseUrl + '/api/public/api/news/' + id, {
      id: id,
      news_update: update,
    });
  }

  addUpdates(update: string) {
    return this.http.post(environment.baseUrl + '/api/public/api/news', {
      news_update: update,
    });
  }

  deleteUpdate(id: number) {
    return this.http.delete(environment.baseUrl + '/api/public/api/news/' + id);
  }

  deleteAllUpdate() {
    return this.http.delete(environment.baseUrl + '/api/public/api/newsall');
  }

  getYoutubeLink() {
    return this.http.get<string>(environment.baseUrl + '/api/public/api/link');
  }

  setYoutubeLink(link: string) {
    return this.http.put(environment.baseUrl + '/api/public/api/link', {
      link: link,
    });
  }
}
