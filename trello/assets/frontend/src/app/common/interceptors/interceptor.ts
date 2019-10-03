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
