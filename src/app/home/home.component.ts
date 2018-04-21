import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
logged = false
  constructor(private user:UserService,
              private  auth: AuthService) { }



  ngOnInit() {

    this.user.getDataForMESSAGE().subscribe ( <backData> (data) => {
  
          if (data.pinValidation == true) {
              this.auth.setLoggedInStatus(true)
              this.logged = this.auth.isLogged()
              console.log (this.auth.isLogged())
          }



      })


  }

}
