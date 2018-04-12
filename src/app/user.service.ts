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
  qoute: string,
  pin: string,
  pinValidation: boolean
  }

  interface confPinStatus{

  status: boolean

  }

  interface PinValidationStatusChange{
    status: boolean
  }

interface defPinChange {
  status:boolean
}

interface UserProfile{

  email: string,
  password: string,
  quote: string,
  pin: string
  pinValidation: boolean

}


@Injectable()
export class UserService {

constructor( private http: HttpClient ) { }

askForUserProfile(){

return this.http.get <UserProfile> ('/api/guardvalidation')

}

updatePinValidationStatus (){

return this.http.put <PinValidationStatusChange> ('/api/pinvalidationstatus',{status: true})

}


askForUserProfilePin(pin){

  return this.http.post <confPinStatus>('/api/confirmedPIN', {pin})
}



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
