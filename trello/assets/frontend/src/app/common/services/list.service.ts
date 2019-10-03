import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Card } from '../../common/models/card.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  card: Card[] = []

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

  createCard(card_title, board_id, list_id): Observable<any>{
    console.log('Service', card_title, board_id, list_id)
    return this.httpClient.post(this.baseurl+'/board/'+board_id+'/list',
    {
      "card_title": card_title,
      "board_list": list_id
    });
  }

  getListCards(board_id, list_id): Observable<any>{
    console.log('List Service', board_id, list_id);
    const url = `${this.baseurl}/board/${board_id}`;
    console.log(url);
    return this.httpClient.get<any>(url, {headers: this.HttpHeaders})
  }

}
