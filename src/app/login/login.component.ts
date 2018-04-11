import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import {Router} from '@angular/router'

import {Data} from '../data'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private auth: AuthService,
               private router: Router ) { }

  ngOnInit( ) {
  }


  loginUser (e){
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    this.auth.getUserDetails (email,password).subscribe ( <Data> (data) => {
      console.log(data)
      if (data.success === true) {
          this.router.navigate(['admin'])
          this.auth.setLoggedInStatus(true);

      } else {
        window.alert ('INDALIED EMAIL OR PASSWORD')
        


      }

    });

  }

}
