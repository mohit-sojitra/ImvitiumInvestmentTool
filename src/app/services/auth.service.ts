import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../interfaces/user.model';
import { catchError, tap } from 'rxjs/operators';
import {  LoginModel } from '../interfaces/login.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  NewUser: UserModel = null;
  private LoggedInUser : LoginModel = null;
  public user = new BehaviorSubject<UserModel>(null);

  onRegister(user: UserModel) {
    return this.http
      .post<UserModel>(environment.baseUrl + '/api/public/api/register1', user)
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          // this.NewUser = resData;
          this.NewUser.email = resData.email;
          this.NewUser.username = resData.username;
          this.NewUser.name = resData.name;
          this.NewUser.id = resData.id;
        })
      );
  }

  onLogin(email: string, password: string) {
    return this.http.post <LoginModel>(environment.baseUrl + '/api/public/api/login', {
      email: email,
      password: password,
    }).pipe(
      catchError(this.handleError),
      tap((resData)=>{
        this.LoggedInUser = resData
      }
    ));
  }

  handleError(
    handleError: any
  ): import('rxjs').OperatorFunction<UserModel, any> {
    throw new Error('Method not implemented.');
  }


  getUser() :LoginModel {
    return this.LoggedInUser;
  }
}
