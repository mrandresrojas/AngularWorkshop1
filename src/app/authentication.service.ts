import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { Injectable } from '@angular/core';
import { Observable, observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  fakeUsername: string = 'username';
  fakePassword: string = 'password';

  constructor() {}
  login(username: string, password: string): Observable<any> {
    if (username === this.fakeUsername && password === this.fakePassword) {
      localStorage.setItem('token', 'mi-token-supersecreto');
      return of('ok');
    } else {
      return throwError(() => new Error('error'));
    }
  }
  logout():void{
  localStorage.removeItem("token");
  }
  isLoggedIn():boolean{
    return localStorage.getItem("token")!= null;
    }
}
