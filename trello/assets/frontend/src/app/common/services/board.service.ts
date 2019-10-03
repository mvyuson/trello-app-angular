import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Board } from '../../common/models/board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient) { }

  getBoard(id: number): Observable<Board>{
    const url = `${this.baseurl}/board/${id}`;
    console.log(url);
    return this.httpClient.get<Board>(url, {headers: this.httpHeaders})
  }
}
