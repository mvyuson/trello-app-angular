import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DashboardService } from '../../common/services/dashboard.service';

import { Board } from '../../common/models/board.model';
import { AuthService } from '../../common/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
  boards: Board[];

  createBoardForm = new FormGroup({
    title: new FormControl(''),
  })

  constructor(public dashboardservice: DashboardService) {
    this.getBoard();
  }

  ngOnInit() {
  }

  @Input() board: Board;

  getBoard = () => {
    this.dashboardservice.getAllBoards().subscribe((res)=>{
      console.log(res);
      this.boards = res;
    })
  }

  onSubmit(): void{
    console.warn(this.createBoardForm.value);
    var title = this.createBoardForm.value.title;
    this.dashboardservice.createBoard(title).subscribe(title => this.boards.push(title));
    this.createBoardForm.reset();
  }

  // addBoard(title: string): void {
  //   title = title.trim();
  //   console.log(title)
  //   if(!title) {return; }
  //   this.dashboardservice.createBoard({ title }).subscribe(title => {
  //     this.boards.push(title);
  //   });
  // }

}


// data => {
//   this.boards = data;
// },
// error => {
//   console.log(error);
// }
