import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngbd-modal-component',
  templateUrl: './ngbd-modal-component.component.html',
  styleUrls: ['./ngbd-modal-component.component.css']
})
export class NgbdModalComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  open(){
    console.log('Modal Component');
  }

}
