import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  addListForm = new FormGroup({
    list_title: new FormControl(''),
  })

  constructor() { }

  ngOnInit() {
  }

}
