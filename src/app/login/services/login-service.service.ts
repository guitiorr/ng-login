import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials } from '../../credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) {

  }

  login(credentials: Credentials){
    return this.http.post('https://dummyjson.com/auth/login', credentials);
  }
}
