import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from '../../common/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit(){
    console.warn(this.loginForm.value);

    this.authService.Authentication(this.loginForm.value.username, this.loginForm.value.password).subscribe(
      (data) => {
        if(data["token"] != null){
          console.log(data["token"])
          console.log('SSSSSASASAS');
          localStorage.setItem("access-token", data["token"])
        }else{
          console.log("Please check your credentials")
        }
      }
    )

    this.loginForm.reset();
  }

  constructor(private authService: AuthService) { }

  login(){
    
  }

  ngOnInit() {
  }

}
