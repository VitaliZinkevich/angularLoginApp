import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Rx'


interface isLoggedinStatus{
status: boolean
}

interface logOutStatus{
  status: boolean
}

interface updateResponse {
  status: boolean,
  message: string,
  qoute: string
  }

@Injectable()
export class UserService {

constructor( private http: HttpClient ) { }

getDataForMESSAGE() {

    return this.http.get ('/api/database')
}

isLoggedIn (){

return this.http.get <isLoggedinStatus>('/api/isLoggedIn')

}

loginOut (){
  return this.http.get <logOutStatus> ('/api/loggout')
}

quoteUpdate (newQuote){
/*
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
*/

return  this.http.put <updateResponse> ('/api/updateQuote', {newQuote} )

}

}
