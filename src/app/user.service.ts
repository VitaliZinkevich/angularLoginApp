import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs/Rx'


interface isLoggedinStatus{
status: boolean
}

interface logOutStatus{
  status: boolean
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

}
