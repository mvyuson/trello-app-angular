import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css']
})
export class BoardDetailComponent implements OnInit {

  addListForm = new FormGroup({
    list_title: new FormControl(''),
  })

  constructor() { }

  ngOnInit() {
  }

}
