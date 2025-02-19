import { Component, inject } from '@angular/core';
import { Credentials } from '../credentials';
import { EmailValidator, FormsModule }  from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginServiceService } from './services/login-service.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private loginService: LoginServiceService){

  }

  loginObj: Credentials = {
    username: '',
    password: '',
  }

  apiLoginObj: Credentials = {
    username: '',
    password: '',
  }

  router = inject(Router);
  http = inject(HttpClient);


  onLogin(){
    // console.log(this.loginObj);
    // if(this.loginObj.email == "admin@gmail.com" && this.loginObj.password == "admin"){
    //   alert("Login Success");
    //   this.router.navigateByUrl("admin");
    // }
    // else{
    //   alert("Login Failed");
    // }

    console.log(this.apiLoginObj);

    this.loginService.login(this.apiLoginObj).subscribe((data:any) => {
      alert("Login Success");
      console.log(data);
      this.router.navigateByUrl("admin");
      localStorage.setItem("angular19user", data.email)
    }, error => {
      alert("Login Failed");
    })
  }
}
