import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  baseurl = 'http://localhost:8000';  //token interceptor
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'}); //token interceptor
  constructor(private httpClient: HttpClient) { }

  getSignup(user: User): Observable<any>{
    console.log('service', user);
    return this.httpClient.post(this.baseurl + '/signup', user, {headers: this.httpHeaders})
  }
}
