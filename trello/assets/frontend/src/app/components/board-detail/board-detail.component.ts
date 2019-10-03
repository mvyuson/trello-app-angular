import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Board } from '../../common/models/board.model';
import { BoardService } from '../../common/services/board.service';
import { DashboardService } from '../../common/services/dashboard.service';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css']
})
export class BoardDetailComponent implements OnInit {

  board: Board;

  boards: Board[];

  createBoardForm = new FormGroup({
    title: new FormControl(''),
  })

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private boardService: BoardService,
    private dashboardService: DashboardService
  ) {
    this.getBoard();
  }

  ngOnInit() {
  }

  getBoard = () => {
    const id = +this.route.snapshot.paramMap.get('id');
    this.boardService.getBoard(id).subscribe(
      (res) => {
        console.log(res, 'KOKO');
        this.board = res;
    })
  }

  onSubmit(): void{
    console.warn(this.createBoardForm.value);
    console.log('id', this.createBoardForm.value.id);
    var title = this.createBoardForm.value.title;
    this.dashboardService.createBoard(title).subscribe(title => this.boards.push(title));
    this.createBoardForm.reset();
    
  }

  addListForm = new FormGroup({
    list_title: new FormControl(''),
  })

}
