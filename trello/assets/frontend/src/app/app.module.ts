import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BoardDetailComponent } from './components/board-detail/board-detail.component';
import { AddListComponent } from './components/add-list/add-list.component';
import { AddCardComponent } from './components/add-card/add-card.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { Interceptor } from './common/interceptors/interceptor';
import { NgbdModalComponentComponent } from './components/ngbd-modal-component/ngbd-modal-component.component';

// import { AuthGuard } from './common/auth/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'board', component: BoardDetailComponent }
        ],
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    DashboardComponent,
    BoardDetailComponent,
    AddListComponent,
    AddCardComponent,
    LoginComponent,
    PageNotFoundComponent,
    NgbdModalComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    NgbModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
