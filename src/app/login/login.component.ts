import { Component, inject } from '@angular/core';
import { Credentials } from '../credentials';
import { FormsModule }  from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginObj: Credentials = {
    email: '',
    password: '',
  }

  router = inject(Router);


  onLogin(){
    console.log(this.loginObj);
    if(this.loginObj.email == "admin@gmail.com" && this.loginObj.password == "admin"){
      alert("Login Success");
      this.router.navigateByUrl("admin");
    }
    else{
      alert("Login Failed");
    }
  }
}
