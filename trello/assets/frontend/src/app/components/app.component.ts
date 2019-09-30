import { Component } from '@angular/core';
// import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  boards = [{title: 'frontend'}];

  constructor(){}
}
