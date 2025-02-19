import { Component } from '@angular/core';
import { Credentials } from '../credentials';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginObj: Credentials = {
    email: '',
    password: '',
  }
}
