import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'

import {Data} from '../data'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private auth: AuthService) { }

  ngOnInit( ) {
  }


  loginUser (e){
    e.preventDefault();
    
    const username = e.target.username.value;
    const password = e.target.password.value;
    
    this.auth.getUserDetails (username,password).subscribe ( <Data> (data) => {
      console.log(data)
      if (data.success === true) {
          console.log ('ADMIN LOG IN')

      } else {
        window.alert (data.mesg)
      }
      
    });

  }
}
