import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  API_URL = 'http://localhost:8000';
  constructor(private httpClient: HttpClient) { }

  getSignup(){
    return this.httpClient.get(`${this.API_URL}/signup`);
    console.log(`${this.API_URL}/signup`)
  }
}
