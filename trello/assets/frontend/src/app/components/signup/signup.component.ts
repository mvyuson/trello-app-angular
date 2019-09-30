import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { SignupService } from '../../common/services/signup.service';
import { User } from '../../common/models/user.model';
import { Observable } from 'rxjs';
// import { userInfo } from 'os';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private signupservice: SignupService) { }

  ngOnInit() {
  }

  @Input() user: User;

  signupForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit(){
    console.warn(this.signupForm.value.username);
    this.user = this.signupForm.value;    
    console.log(this.user);
    var username = this.user.username;
    var email = this.user.email;
    var password = this.user.password;

    this.signupservice.getSignup(username, email, password);
    this.signupForm.reset();
    }
    // this.SignupService.getSignup()
    //   .subscribe((data: this.signupForm.value))
}
