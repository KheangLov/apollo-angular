import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { RegisterQL } from 'src/app/queries/registerQL';
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

  constructor(private _register: RegisterQL) { }

  ngOnInit() {
    this.model = { name: '', email: '', password: '', password_confirmation: '' };
  }

  onSubmit() {
    this.errorMessage = '';
    this._register.mutate(this.model)
      .subscribe(c => console.log({ c }));
  }
}
