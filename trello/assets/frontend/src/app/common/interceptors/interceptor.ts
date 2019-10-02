import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { tap } from 'rxjs/operators';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';

@Injectable()
export class Interceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let r = req.clone({
      headers: req.headers.set('Authorization', this.token())
    });

    return next.handle(r).pipe(tap(
      res => {
        if(res instanceof HttpResponse) return res;
      }
    ));
  }

  token(){
    const t = (<any>window).localStorage['access-token'];
    console.log(t);
    return `Token ${t}`;
  }
}





// import { Injectable, Injector } from '@angular/core';
// import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders} from '@angular/common/http';
// import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/observable/throw'
// import 'rxjs/add/operator/catch';
// @Injectable()
// export class Interceptor implements HttpInterceptor {
//   constructor() {}
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//  if(localStorage.getItem('access-token') != null) 
// {
//    const token =  localStorage.getItem('access-token');
// // if the token is  stored in localstorage add it to http header
// const headers = new HttpHeaders().set("access-token", token);
//    //clone http to the custom AuthRequest and send it to the server 
// const AuthRequest = request.clone( { headers: headers});
// return next.handle(AuthRequest)
//    }else {
//      return next.handle(request);
//    }
//   }
// }