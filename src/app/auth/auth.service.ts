import { Injectable } from '@angular/core';
import { UserModel } from '../_models/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = 'http://localhost:3000/user/';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public storedUser: BehaviorSubject<UserModel> = new BehaviorSubject(null);

  constructor(
    private http: HttpClient,
    // private storage: Storage,
  ) {
    // this.storage.get('user').then((user) => {
    //   this.storedUser.next(user);
    //
    //   // When the user is changed it will be saved to local storage.
    //   this.storedUser.subscribe(newUser => {
    //     if (newUser == null) {
    //       this.storage.remove('user');
    //     } else {
    //       this.storage.set('user', newUser);
    //     }
    //   });
    // });
  }

  public createUser(user: UserModel): Observable<UserModel[]> {
    return this.http.post(API_URL + 'register', user)
      .pipe(map((response: any) => response.data.map(u => UserModel.transform(u))));
  }

  public currentUser(): Observable<UserModel> {
    return this.http.get(API_URL + 'profile')
      .pipe(map((response: any) => response.data))
      .pipe(map(u => UserModel.transform(u)))
      .pipe(map((user) => {
          // Now we have a "fresh" user we might as well replace the stored user.
          this.storedUser.next(user);
          return user;
      }));

    // return this.http.get(this.API_URL + 'profile')
    // .map((response: any) => response.data)
    // .map(u => UserModel.transform(u))
    // .map((user) => {
    //   // Now we have a "fresh" user we might as well replace the stored user.
    //   this.storedUser.next(user);
    //   return user;
    // });
  }

  public authenticate(username: string, password: string): Observable<any> {
    console.log(API_URL + 'login');
    return this.http.post(API_URL + 'login', {
      username,
      password,
    }).pipe(map((response: any) => {
      // When the response is successful the token and user can be saved.
      if (response.success) {
        // this.storage.set('token', response.data.token);
        localStorage.setItem('token', response.token);
        console.log('token');
        console.log(response.token);

        // this.storage.set('token', response.data.token).then(() =>
        //   // The current user method will also set the user.
        //   this.currentUser().subscribe(() => {
        //     this.companyService.loadImage();
        //   })
        // );
      }
      console.log(response);
      return response;
    }));
  }

  public logout(): void {
    this.storedUser.next(null);
    // this.storage.remove('token');
    localStorage.remove('token');
  }
}
