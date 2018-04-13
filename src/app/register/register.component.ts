import { Component, OnInit } from '@angular/core';

import {AuthService} from '../auth.service'
import {Router} from '@angular/router'



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  errorsValidation = []

  //heroes:Array<string> = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  constructor(private auth: AuthService,
              private router: Router) {}

  ngOnInit() {
  }

  registerUser (event){

    event.preventDefault();

    this.errorsValidation=[]




    const email = event.target.email.value;
    const password = event.target.password.value;
    const cpassword = event.target.cpassword.value;

// VALIDATION FRONT

    function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    }

    const validEmail  = validateEmail (email)

    if (validEmail == false ) {
      this.errorsValidation.push ({error: 'Email is not valied'})
    }

   if (password != cpassword) {
          this.errorsValidation.push ({error: 'Passwords are not equal'})
        }


    if (password.length < 4) {
    this.errorsValidation.push ({error: 'Password at least 4 symbols'})
    }




//Send data for user registrarion
    console.log (this.errorsValidation)

    if (this.errorsValidation.length == 0){

      this.auth.register(email,password, cpassword).subscribe (  (data) => {

      if (data.success == true) {

      //this.auth.setLoggedInStatus (true)

      // перевести на ввод пина при регистрации, отдельный компонент
      // отслеживать ввод пина ??сессиями + хранение сессий или в базе данных в свойствах пользователя?? что бы если попал но перезагрузился было видно что пин не введен
      // не отображать REGISTRATION если пользователь залогинен

      this.router.navigate(['pin'])

      } else {
        console.log (data.message)
        this.router.navigate(['login'])
        }
      });

    }

  }


}
