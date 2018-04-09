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

    const username = event.target.username.value;
    const password = event.target.password.value;
    const cpassword = event.target.cpassword.value;
    

    // VALIDATION FRONT

    if (password != cpassword) {
      console.log ('password != cpassword')
      return false
    }

    //


    //REQ AFTER
    this.auth.register(username,password, cpassword).subscribe (  (data) => {
    console.log(data)
    if (data.success == true) {
    this.router.navigate(['dashboard'])
    //this.router.navigate(['admin'])


    } else {

      console.log ('not true respond')

    }
    });

  }


}
