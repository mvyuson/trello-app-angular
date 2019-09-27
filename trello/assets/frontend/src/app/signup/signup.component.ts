import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit(){
    console.warn(this.signupForm.value);

    // this.SignupService.getSignup()
    //   .subscribe((data: ))
  }

  constructor(private SignupService: SignupService) { }

  ngOnInit() {
  }

}
