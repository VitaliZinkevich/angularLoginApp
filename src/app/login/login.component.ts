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

  restoringStart = false;



sendRestoringEmail(e){
  e.preventDefault();
  const email = e.target.emailForRestore.value
  this.user.sendPassword(email).subscribe(
    (data)=>{
      console.log (data)
    }
  )




}

  restorePassword(){
    this.restoringStart = !this.restoringStart
  }

  loginUser (e){
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    this.auth.getUserDetails (email,password).subscribe ( <Data> (data) => {
      console.log(data)
      if (data.success === true) {


        this.user.askForUserProfile().subscribe (
(data)=>{
  console.log (data)
  if (data.pinValidation == false) {
    this.router.navigate (['pin'])
  } else {
    this.router.navigate (['admin'])
  }
}

        )
/*
          this.router.navigate(['admin'])
          this.auth.setLoggedInStatus(true);

*/

      } else {
        window.alert ('INDALIED EMAIL OR PASSWORD')



      }

    });

  }

}
