import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private _auth :AuthService,
    private _router : Router,
    private _snackBar: MatSnackBar 
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //!this._auth.logged
    if(!localStorage.getItem("token")){
      this._snackBar.open('You cannot enter, maybe you sessión expired, you have llogout or you have not registered yet', 'Close', {
        duration: 3500,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      this._router.navigate(['/signin']);
    }
    return localStorage.getItem("token") != null;
  }
  
}
