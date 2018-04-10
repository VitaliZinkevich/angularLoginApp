import { Component, OnInit } from '@angular/core';

import {AuthService} from '../auth.service'
import {Router} from '@angular/router'



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService,
              private router: Router) {}

  ngOnInit() {
  }

  registerUser (event){

    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const cpassword = event.target.cpassword.value;


    // VALIDATION FRONT
/*
    if (password != cpassword) {
      console.log ('password != cpassword')
      return false
    }
*/
    //


    //REQ AFTER
    this.auth.register(email,password, cpassword).subscribe (  (data) => {

    if (data.success == true) {

    this.auth.setLoggedInStatus (true)

    this.router.navigate(['admin'])



    } else {
      console.log (data.message)
      this.router.navigate(['login'])


    }
    });

  }


}
