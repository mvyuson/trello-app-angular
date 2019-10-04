import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Card } from '../../common/models/card.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  baseurl = "http://127.0.0.1:8000";
  HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient) { }

  getAllLists(board_id): Observable<any>{
    return this.httpClient.get(this.baseurl+'/board/'+board_id+'/list',
    {headers: this.HttpHeaders})
  }

  createList(list_title, board_id): Observable<any>{
    return this.httpClient.post(this.baseurl+'/board/'+board_id+'/list',
    {
      "list_title": list_title,
      "board": board_id
    })
  }
}
