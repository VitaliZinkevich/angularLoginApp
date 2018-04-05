import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from './auth.service'
import {Router} from '@angular/router'

@Injectable()
export class AuthGuard implements CanActivate {

  constructor (private auth: AuthService,
                private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (!this.auth.isLoggedInStatus) {
        this.router.navigate(['login'])
      }

    return <boolean>this.auth.isLoggedInStatus ;
  }



}
