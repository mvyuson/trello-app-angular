import * as _ from 'lodash';

import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { tap } from 'rxjs/operators';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';

import { AuthService } from '../auth/auth.service'

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(
  ) { }

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
