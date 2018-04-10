import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'
import {AuthService} from '../auth.service'
import {Router} from '@angular/router'

interface backData {
name: string,
status: string,
respond: string
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

constructor ( private user: UserService,
              private auth: AuthService,
            private router: Router) { }

ngOnInit() {

this.user.getDataForMESSAGE().subscribe ( <backData> (data) => {
        this.message = data.respond

  })


}


logOut(){

this.user.loginOut().subscribe (  (data) => {
        console.log ("logOut")
        console.log (data.status)

         if (data.status === true) {
           this.auth.setLoggedInStatus (false)
           this.router.navigate([''])

         } else {
           console.log ('problem loginOut')
         }
  })
}







message = 'LOADING...';




}
