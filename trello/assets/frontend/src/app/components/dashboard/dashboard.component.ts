import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DashboardService } from '../../common/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
  private boards = [];

  createBoardForm = new FormGroup({
    title: new FormControl(''),
  })

  constructor(public dashboardservice: DashboardService) {
    this.getBoard();
  }

  ngOnInit() {
  }

  getBoard = () => {
    this.dashboardservice.getAllBoards().subscribe((res)=>{
      console.log(res);
      this.boards = res;
    })
  }

  onSubmit(): void{
    
  }

  addBoard(title: string): void {
    title = title.trim();
    console.log(title)
    if(!title) {return; }
    this.dashboardservice.createBoard({ title }).subscribe(title => {
      this.boards.push(title);
    });
  }

}


// data => {
//   this.boards = data;
// },
// error => {
//   console.log(error);
// }
