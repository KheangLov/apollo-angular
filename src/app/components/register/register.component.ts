import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model!: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  };
  errorMessage: string = '';

  constructor(private _acctService: AuthService) { }

  ngOnInit() {
    this.model = { name: '', email: '', password: '', password_confirmation: '' };
  }

  onSubmit() {
    this.errorMessage = '';
    this._acctService.register(this.model)
      .pipe(
        map((r) => {
          console.log({ r });
          return this._acctService.login(this.model.email, this.model.password);
        })
      )
      .subscribe(c => console.log({ c }));
  }
}
