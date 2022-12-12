import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { LoginQL } from '../queries/loginQL';
import { RegisterQL } from '../queries/registerQL';

@Injectable()
export class AuthService {
  public token: string = '';
  // constructor(private loginQL: LoginQL, private registerQL: RegisterQL) { }

  // register({ name, email, password, password_confirmation }: any) {
  //   return this.registerQL.mutate({
  //     name,
  //     email,
  //     password,
  //     password_confirmation
  //   }
  //   ).pipe(tap(success => {
  //     console.log({ success });
  //     console.log('created account');
  //   }));
  // }

  // login(username: string, password: string) {
  //   return this.loginQL.mutate({
  //     username,
  //     password
  //   }
  //   ).pipe(tap(success =>
  //     this.token = (success as any).data.logIn.token
  //   ));
  // }

  isLoggedIn() {
    return this.token;
  }

  logOut() {
    this.token = '';
  }
}
