import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserService {

constructor( private http: HttpClient ) { }

  getData() {

    return this.http.get ('/api/database')
}

}
