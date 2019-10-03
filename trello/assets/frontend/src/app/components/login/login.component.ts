import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../common/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  redirectUrl = 'http://localhost:8000/dashboard/';

  onSubmit(){
    console.warn(this.loginForm.value);

    this.authService.Authentication(this.loginForm.value.username, this.loginForm.value.password).subscribe(
      (data) => {
        if(data["token"] != null){
          console.log(data["token"])
          localStorage.setItem("access-token", data["token"])
          this.router.navigate(['dashboard']);
          console.log('Logged in');
        }else{
          console.log("Please check your credentials")
        }
      }
    )
   
    
    this.loginForm.reset();
  }
}

