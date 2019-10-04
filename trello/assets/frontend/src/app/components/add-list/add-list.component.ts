import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { List } from '../../common/models/list.model';
import { ListService } from 'src/app/common/services/list.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  list: List[] = [];

  addListForm = new FormGroup({
    list_title: new FormControl(''),
  })

  constructor(
    private route: ActivatedRoute,
    private listService: ListService
  ) {
    this.getList();
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
}
