import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.authService.LoggedInUser.value) {
      const modifiedReq = request.clone({
        headers : new HttpHeaders().set('Authorization','Bearer '+this.authService.LoggedInUser.value.access_token),
      });
      return next.handle(modifiedReq);
    }
    return next.handle(request);
  }
}
