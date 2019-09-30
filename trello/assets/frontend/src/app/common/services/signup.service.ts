import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  baseurl = 'http://localhost:8000';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private httpClient: HttpClient) { }

  getSignup(username, email, password): Observable<any>{
    var data = {
      "username": username,
      "email": email,
      "password": password
    }

    console.log(data);

    return this.httpClient.post(this.baseurl + '/signup/', data, {headers: this.httpHeaders})
  }
}
