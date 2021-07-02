import { Injectable } from '@angular/core';
import { UserModel } from '../_models/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environment';
import { JwtHelperService } from '@auth0/angular-jwt';

const API_URL = environment.backendUrl + '/user/';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public storedUser: BehaviorSubject<UserModel> = new BehaviorSubject(null);

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) { }

  public createUser(user: UserModel): Observable<void> {
    return this.http
      .post(API_URL + 'register', user)
      .pipe(
        map((response: any) => {

          // When the response is successful the token and user can be saved.
          if (response.success) {
            localStorage.setItem('token', response.token);
          }
          return response;
        })
      );
  }

  public currentUser(): Observable<UserModel> {
    return this.http
      .get(API_URL + 'profile')
      .pipe(map((response: any) => response.data))
      .pipe(map((u) => UserModel.transform(u)))
      .pipe(
        map((user) => {
          // Now we have a "fresh" user we might as well replace the stored user.
          this.storedUser.next(user);
          return user;
        })
      );
  }

  public authenticate(username: string, password: string): Observable<any> {
    console.log(API_URL + 'login');
    return this.http
      .post(API_URL + 'login', {
        username,
        password,
      })
      .pipe(
        map((response: any) => {
          // When the response is successful the token and user can be saved.
          if (response.success) {
            localStorage.setItem('token', response.token);
          }
          return response;
        })
      );
  }

  public logout(): void {
    this.storedUser.next(null);
    localStorage.removeItem('token');
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
