import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private Http:HttpClient) { }

  Authentication(username:string, password:string){
    let json = {username:username, password:password}
    return this.Http.post("http://localhost:8000/login", json);
  }

  logout(){
    localStorage.removeItem('access-token');
  }

}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor(private Http:HttpClient) { }

//   private AUTH_KEY = '89hre67d56cb9eyu956ger878yu653902hjs86';

//   Authentication(username:string, password:string){
//     let json = {username:username, password:password}
//     return this.Http.post("http://localhost:8000/login", json)
//       .subscribe((res) => { this.setToken(res); return res; })
//   }

//   logout(){
//     localStorage.removeItem('access-token');
//   }

//   setToken(token){
//     (<any>window).localStorage[this.AUTH_KEY] = JSON.stringify(token);
//     return;
//   }

//   getToken(){
//     let token = (<any>window).localStorage[this.AUTH_KEY];
//     if (!token) return null;

//     return JSON.parse(token);
//   }

// }
