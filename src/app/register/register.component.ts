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
