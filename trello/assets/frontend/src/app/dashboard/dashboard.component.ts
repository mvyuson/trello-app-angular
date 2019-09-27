import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  createBoardForm = new FormGroup({
    title: new FormControl(''),
  })

  constructor() { }

  ngOnInit() {
  }

}
