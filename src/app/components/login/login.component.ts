import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { LoginQL } from 'src/app/queries/loginQL';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model!: {
    username: string;
    password: string;
  };

  errorMessage: string = '';

  constructor(private _login: LoginQL) { }

  ngOnInit() {
    this.model = { username: '', password: '' };
  }
  onSubmit() {
    this.errorMessage = '';
    this._login.mutate(this.model)
      .subscribe(c => {
        console.log({ c })
      });
  }
}
