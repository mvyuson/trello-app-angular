import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHeaders, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';
import { Router } from "@angular/router";
import { tap } from 'rxjs/operators';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let r = req.clone({
      headers: req.headers.set('Authorization', this.token())
    });

    return next.handle(r)
      .pipe(tap(
        res => {
          if(res instanceof HttpResponse) return res;
        }
      ))
      .catch(error => {
        if(error instanceof HttpErrorResponse && error.status == 404){
          this.router.navigateByUrl('/not-found', {replaceUrl: true});
  
          return new EmptyObservable();
        }
      })
  } 

  token(){
    const t = (<any>window).localStorage['access-token'];
    console.log('Token', t);
    return `Token ${t}`;
  }
 
}









// intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//   if(localStorage.getItem('access-token') != null){
//     const token = localStorage.getItem('access-token');
//     const headers = new HttpHeaders().set('A', token);
//     const AuthRequest = request.clone({ headers: headers });

//     return next.handle(AuthRequest)
//   }else{
//     return next.handle(request);
//   }
// }