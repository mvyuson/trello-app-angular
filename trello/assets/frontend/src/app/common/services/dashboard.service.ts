import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient) { }

  getAllBoards(): Observable<any>{
    return this.httpClient.get(this.baseurl + '/dashboard/', 
    {headers: this.httpHeaders})
  }

  createBoard(title): Observable<any>{
    return this.httpClient.post(this.baseurl + '/dashboard/',
    {
      "title": title
    })
  }
  
}
