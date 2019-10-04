import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BoardDetailComponent } from './components/board-detail/board-detail.component';
import { AddListComponent } from './components/add-list/add-list.component';
import { AddCardComponent } from './components/add-card/add-card.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgbdModalComponentComponent } from './components/ngbd-modal-component/ngbd-modal-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'board/:id', component: BoardDetailComponent },
  { path: 'board/:id/list', component: AddListComponent },
  { path: 'board/:id/list/:id2/card', component: AddCardComponent },
  { path: 'card-description', component: NgbdModalComponentComponent},
  { path: 'not-found', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

