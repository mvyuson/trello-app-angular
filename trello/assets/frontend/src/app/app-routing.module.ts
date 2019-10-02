import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BoardDetailComponent } from './components/board-detail/board-detail.component';
import { AddListComponent } from './components/add-list/add-list.component';
import { AddCardComponent } from './components/add-card/add-card.component';

const routes: Routes = [
  {path: '', redirectTo: 'signup', pathMatch: 'full' },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'board-detail',
    component: BoardDetailComponent
  },
  {
    path: 'add-list',
    component: AddListComponent
  },
  {
    path: 'add-card',
    component: AddCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

