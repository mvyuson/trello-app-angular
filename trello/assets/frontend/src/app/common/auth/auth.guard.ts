// import { Injectable } from '@angular/core';
// import { CanActivate, CanActivateChild, Router, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';

// import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate, CanActivateChild {

//   constructor(private authService: AuthService, private router: Router){}

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): boolean {
//       const url: string = state.url;
//       return this.checkLogin(url);
//   }
//   canActivateChild(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): boolean {
//     return this.canActivate(next, state);
//   }
 
//   checkLogin(url: string){
//     if(this.authService.isLoggedIn()){
//       return true;
//     }

//     this.authService.redirectUrl = url;

//     this.router.navigate(['/api-auth/login'], {queryParams: { returnUrl: url }})

//   }
// }
