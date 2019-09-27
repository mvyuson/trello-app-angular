import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  addCardForm = new FormGroup({
  card_title: new FormControl(''),
  })

  constructor() { }

  ngOnInit() {
  }

}
