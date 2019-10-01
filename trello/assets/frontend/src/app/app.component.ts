import { Component } from '@angular/core';
// import { AuthService } from './common/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  // private username:string = ""
  // private password:string = ""

  constructor(){}

  // Login(){
  //   this.authService.Authentication(this.username, this.password).subscribe(
  //     (data) => {
  //       if(data["token"] != null){
  //         // retrieve the access token from the server
  //         console.log(data["token"])

  //         // store the token in the local Storage
  //         localStorage.setItem("access-token", data["token"])
  //       }else{
  //         console.log("Please check you credentials")
  //       }
  //     }
  //   )
  // }

}
