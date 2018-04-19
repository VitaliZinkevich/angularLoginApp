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

interface setSessionStatus{
  status: boolean
}

interface restoreStatus {
  status:boolean
}

interface backData {
email: string,
quote: string,
topScore: number,
totalRows: number,
spendedTime :number,
}

interface topScore {
  email: string,
  quote: string,
  topScore: number,
  totalRows: number,
  spendedTime :number,
}

@Injectable()
export class UserService {

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type':  'application/json'

     })
   };

constructor( private http: HttpClient ) { }

getTop(){
  return this.http.get <topScore>('/api/gettopfive')
}


sendPassword(email){

  return this.http.post <restoreStatus>('/api/restorepassword',{email},this.httpOptions)
}

setSession (){
  return this.http.get <setSessionStatus>('/api/setsession')
}




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

    return this.http.get <backData>('/api/database')
}

isLoggedIn (){

return this.http.get <isLoggedinStatus>('/api/isLoggedIn')

}

loginOut (){
  return this.http.get <logOutStatus> ('/api/loggout')
}

quoteUpdate (newQuote){

return  this.http.put <updateResponse> ('/api/updateQuote', {newQuote} )

}

}
