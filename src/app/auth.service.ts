import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';



@Injectable()
export class AuthService {


  constructor(private http: HttpClient ) { }

  isLoggedInStatus = JSON.parse (localStorage.getItem('loggedIn') || 'false');

  setLoggedInStatus (param: boolean){

      this.isLoggedInStatus  = param;
      localStorage.setItem ('loggedIn', 'true')
  }




 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'

    })
  };



    getUserDetails(username,password){

        return this.http.post ('api/login', {username,password}, this.httpOptions );

        /*this.http.get('api/login')
        .subscribe (data => {
                console.log (data, 'this from sever')
                //console.log (data.value)
            })*/

        }

}
