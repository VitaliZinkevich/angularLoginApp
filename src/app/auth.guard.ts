import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from './auth.service'
import {Router} from '@angular/router'
import {UserService} from './user.service'

import {map} from 'rxjs/operators'

@Injectable()
export class AuthGuard implements CanActivate {

  constructor (private auth: AuthService,
              private router: Router,
              private user: UserService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {



        return this.user.askForUserProfile().pipe(map (ans=> {

        if (ans.pinValidation == true) {
          this.auth.setLoggedInStatus (true)

          return ans.pinValidation
        } else {

        this.router.navigate(['pin'])
        return ans.pinValidation

        }

      }))



}
}
