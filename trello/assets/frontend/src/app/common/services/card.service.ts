import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

import { Card } from '../../common/models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  card: Card[] = [];

  baseurl = "http://127.0.0.1:8000";
  HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient) { }

  createCard(card_title:Card, board_id, list_id): Observable<Card>{
    console.log('Card Service', card_title, board_id, list_id)
    return this.httpClient.post<Card>(this.baseurl+'/board/'+board_id+'/list/'+list_id+'/card',
    {
      "card_title": card_title,
      "board_list": list_id
    })
  }
  

  getAllCards(board_id, list_id): Observable<any>{
    return this.httpClient.get(this.baseurl+'/board/'+board_id+'/list/'+list_id+'/card',
    {headers: this.HttpHeaders})
  }


}
