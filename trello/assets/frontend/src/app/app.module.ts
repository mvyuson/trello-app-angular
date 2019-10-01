import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatTableModule} from '@angular/material';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BoardDetailComponent } from './components/board-detail/board-detail.component';
import { AddListComponent } from './components/add-list/add-list.component';
import { AddCardComponent } from './components/add-card/add-card.component';
import { LoginComponent } from './components/login/login.component';
import { InterceptorService } from './common/interceptors/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    DashboardComponent,
    BoardDetailComponent,
    AddListComponent,
    AddCardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
