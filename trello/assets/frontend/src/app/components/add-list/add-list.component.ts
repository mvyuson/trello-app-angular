import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { List } from '../../common/models/list.model';
import { Card } from '../../common/models/card.model';
import { ListService } from 'src/app/common/services/list.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  list: List[] = [];
  cards: Card[] = [];

  addListForm = new FormGroup({
    list_title: new FormControl(''),
  })

  addCardForm = new FormGroup({
    card_title: new FormControl(''),
  })

  constructor(
    private route: ActivatedRoute,
    private listService: ListService
  ) {
    this.getList();
    this.getAllCard();
   }

  ngOnInit() {
  }

  getList = () => {
    console.log('List', this.list)
    const board_id = +this.route.snapshot.paramMap.get('id');
    this.listService.getAllLists(board_id).subscribe((res)=>{
      console.log('Response', res);
      this.list = res;
    })
  }


  onSubmit(): void{
    console.warn(this.addListForm.value);
    const board_id = +this.route.snapshot.paramMap.get('id');
    var list_title = this.addListForm.value.list_title;
    this.listService.createList(this.addListForm.value.list_title, board_id).subscribe(
      (list_title) => this.list.push(list_title)
    );
    this.addListForm.reset();
  }

  CardSubmit(list_id): void{
    console.warn(this.addCardForm.value);
    console.log(list_id)
    const board_id = +this.route.snapshot.paramMap.get('id');
    this.listService.createCard(this.addCardForm.value.card_title, board_id, list_id).subscribe(
      (card_title) => this.cards.push(card_title)
    );
    this.addCardForm.reset();
    this.getListCards(board_id, list_id);
  }

  getListCards(board_id, list_id){
    this.listService.getListCards(board_id, list_id).subscribe(
      (res) => {
        console.log(res, 'CARDd');
        this.cards = res;
        console.log(this.cards);
      }
    )
  }

  getAllCard(){
    console.log('JOJOO', this.cards);
  }

}
