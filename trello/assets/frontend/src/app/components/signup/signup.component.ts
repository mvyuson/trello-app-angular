import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { SignupService } from '../../common/services/signup.service';
import { User } from '../../common/models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [SignupService]
})
export class SignupComponent implements OnInit {

  constructor(
    private router: Router,
    private signupservice: SignupService
  ) { }

  ngOnInit() {
  }

  user: User[] = [];

  signupForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit(): void{
    console.warn(this.signupForm.value.username);
    var temp_user = this.signupForm.value;    

    console.log(temp_user);

    this.signupservice.getSignup(temp_user).subscribe(
      temp_user => this.user.push(temp_user));
      this.router.navigate(['login'])

    this.signupForm.reset();
    }
    // this.SignupService.getSignup()
    //   .subscribe((data: this.signupForm.value))
}
