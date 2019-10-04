import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Card } from '../../common/models/card.model';
import { CardService } from 'src/app/common/services/card.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
  cards: Card[] = [];
  @Input() public list_id: number;

  addCardForm = new FormGroup({
    card_title: new FormControl(''),
  })

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService,
    private modalService: NgbModal
  ){ 
    // this.getCards();
  }

  ngOnInit() {
  }

  onSubmit(): void{
    console.log(this.list_id);
    console.warn('CARD', this.addCardForm.value);
    console.log(this.cards);

    const board_id = +this.route.snapshot.paramMap.get('id');
    this.cardService.createCard(this.addCardForm.value.card_title, board_id, this.list_id).subscribe(
      (card_title) => this.cards.push(card_title)
    );
    this.addCardForm.reset();

    // this.getCards(this.list_id);
  }

  getCards = () => {
    console.log('Card', this.list_id)
    const board_id = +this.route.snapshot.paramMap.get('id');
    this.cardService.getAllCards(board_id, this.list_id).subscribe((res) => {
      console.log('Response', res);
      this.cards = res;
    })
  }
  // open(){
  //   console.log('modal');
  //   // const modal = this.modalService.open(NgbdModalContent);
  //   // modal.componentInstance = ''
  // }
}
