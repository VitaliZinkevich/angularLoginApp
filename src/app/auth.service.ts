import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Rx'


interface RegisterRespond {
  success: boolean,
  message: string
}

@Injectable()
export class AuthService {


  constructor(private http: HttpClient ) { }

  isLoggedInStatus = false;


  setLoggedInStatus (param: boolean){

      this.isLoggedInStatus  = param;

  }


  isLogged() {
    //console.log (this.isLoggedInStatus)
    return this.isLoggedInStatus

  }




 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'

    })
  };



    getUserDetails(email,password){

        return this.http.post ('api/login', {email, password}, this.httpOptions );

        /*this.http.get('api/login')
        .subscribe (data => {
                console.log (data, 'this from sever')
                //console.log (data.value)
            })*/

        }


register (email, password, cpassword){

    return this.http.post <RegisterRespond>('api/register', {email,password,cpassword}, this.httpOptions );

    }

}
