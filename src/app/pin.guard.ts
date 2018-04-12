import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service'
import {map} from 'rxjs/operators'
import {Router} from '@angular/router'

@Injectable()
export class PinGuard implements CanActivate {

constructor (private router: Router,
              private user: UserService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {


      return this.user.askForUserProfile().pipe(map (ans=> {

      if (ans.pinValidation == true) {
        this.router.navigate (['admin'])
        return false
      } else {

      return true

      }

    }))




    //return true;
  }
}
