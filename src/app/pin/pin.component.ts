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

pinValidationStatus

pin=''

checkPin(e){
  e.preventDefault()

this.pin = e.target.pin.value
  // some input VALIDATION
  //if PIN valid
if (this.pin.length == 4) {

      this.user.askForUserProfilePin(this.pin).subscribe(
        (data)=>{
          console.log (data)




            if (data.status == true) {

            this.router.navigate(['admin'])
            this.auth.setLoggedInStatus (true)

          } else {
            window.alert ('wrong PIN')

          }




        }
      )
}
 else {
  console.log ('length < 4')
}




  //if (this.pin == ) запросу из базы данных



}

}
