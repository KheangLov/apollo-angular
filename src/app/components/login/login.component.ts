import { Component, OnInit } from '@angular/core';
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
  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this.model = { username: '', password: '' };
  }

  onSubmit() {
    this.errorMessage = '';
    this._authService.login(this.model.username, this.model.password)
      .subscribe(c => {
        console.log({ c })
      });
  }
}
