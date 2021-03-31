import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../interfaces/user.model';
import { catchError, tap } from 'rxjs/operators';
import { LoginModel } from '../interfaces/login.model';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private route: Router) {}
  public LoggedInUser = new BehaviorSubject<LoginModel>(null);

  onRegister(user: UserModel) {
    console.log(user);

    return this.http.post<UserModel>(
      environment.baseUrl + '/api/public/api/register1',
      user
    );
  }

  onLogin(email: string, password: string) {
    return this.http
      .post<LoginModel>(environment.baseUrl + '/api/public/api/login', {
        email: email,
        password: password,
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.LoggedInUser.next(resData);
          localStorage.setItem(
            'userData',
            JSON.stringify(this.LoggedInUser.value)
          );
        })
      );
  }

  handleError(
    handleError: any
  ): import('rxjs').OperatorFunction<UserModel, any> {
    throw new Error('Email or username already registerd');
  }

  changePassword(oldPassword: String, newPassword: String) {
    return this.http.put(
      environment.baseUrl + '/api/public/api/change_password/' + 48,
      {
        id: 48,
        old_password: oldPassword,
        new_password: newPassword,
      }
    );
  }

  getUser(): LoginModel {
    return this.LoggedInUser.value;
  }

  public autoLogin() {
    const userData: LoginModel = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    if (userData.access_token) {
      if (userData.register.type !== 'admin') {
        this.LoggedInUser.next(userData);
        this.route.navigate(['/edituser']);
      } else {
        this.LoggedInUser.next(userData);
        this.route.navigate(['/admin']);
      }
    }
  }

  public logOut() {
    this.http
      .post(environment.baseUrl + '/api/public/api/logout', {
        token: this.LoggedInUser.value.access_token,
      })
      .subscribe(
        (res) => {
          this.LoggedInUser.next(null);
          localStorage.clear();
          this.route.navigate(['/']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
