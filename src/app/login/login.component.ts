import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import {Router} from '@angular/router'
import { UserService } from '../user.service'
import {Data} from '../data'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private auth: AuthService,
                private user: UserService,
               private router: Router ) { }

  ngOnInit( ) {
  }



  errorsValidation=[]
  restoringStart = false;

  testImport (){

  }

  validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
  }

sendRestoringEmail(e){
  e.preventDefault();

  this.errorsValidation = []

  const email = e.target.emailForRestore.value
  const validEmail  = this.validateEmail (email)


  if (validEmail){

    this.user.sendPassword(email).subscribe(
      (data)=>{

      }
    )

  } else {
    this.errorsValidation.push ({error: 'Invalied email' })


  }

}

  restorePassword(){
    this.restoringStart = !this.restoringStart
  }

  loginUser (e){
    e.preventDefault();
    this.errorsValidation = []
    const email = e.target.email.value;
    const password = e.target.password.value;

    const valiedEmail = this.validateEmail(email)

    if (valiedEmail == false) {

      this.errorsValidation.push ({error: 'Invalied email' })
    }

    if (this.errorsValidation.length == 0){}
    this.auth.getUserDetails (email,password).subscribe ( <Data> (data) => {

  if (data.success === true) {


        this.user.askForUserProfile().subscribe (
(data)=>{
  
  if (data.pinValidation == false) {
    this.router.navigate (['pin'])
  } else {
    this.router.navigate (['admin'])
  }
}
        )
} else {
        this.errorsValidation.push ({error: 'Invalied password or email to login'})



      }

    });

  }

}
