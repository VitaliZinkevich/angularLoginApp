import { Component, OnInit, Input } from '@angular/core';
import { OnChanges } from '@angular/core';
import { UserService } from '../user.service'
import { Router } from '@angular/router'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.css']
})
export class PinComponent implements OnInit {

  constructor(private user: UserService,
              private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }


errorsValidation=[]




checkPin(e){
  e.preventDefault()
  this.errorsValidation = []

  let pin = e.target.pin.value.toString()
  // some input VALIDATION

  let onlyNumbers = /^[0-9]*$/;

  if( onlyNumbers.test(pin) ) {

  } else {
    this.errorsValidation.push ({error:'PIN got only digits'})
  }

  console.log (onlyNumbers.test(pin))
  console.log (pin.length)

  if( pin.length < 4 ) {
    this.errorsValidation.push ({error:'PIN type of 4 digits number'})

  }


  //if PIN valid
  console.log ('err length' ,this.errorsValidation.length)

if (this.errorsValidation.length == 0) {

      this.user.askForUserProfilePin(pin).subscribe(
        (data)=>{


            if (data.status == true) {

            this.router.navigate(['admin'])
            this.auth.setLoggedInStatus (true)

          } else {
            this.errorsValidation.push ({error:'Invalied PIN'})

          }

        })
}
 else {

  }
}

}
