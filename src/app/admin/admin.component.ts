import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'
import {AuthService} from '../auth.service'
import {Router} from '@angular/router'



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

this.user.getDataForMESSAGE().subscribe ( (data) => {




        this.messageQuote = data.quote
        this.messageEmail = data.email

        this.topscore = data.topScore
        this.totalLines = data.totalRows
        this.totalTime = data.spendedTime

  })


}



saveNewQuote (e){
e.preventDefault()

const newQuote = e.target.newQuote.value

if (newQuote.length < 3) {

this.updateMessage = 'Motto should be at least 3 letter'
this.messageClass = "alert alert-danger"

  return false
}





this.user.quoteUpdate(newQuote). subscribe ((data)=> {

if (data.status == true) {
  this.messageClass = "alert alert-success"
  this.messageQuote = data.qoute;
  this.updateMessage = data.message

} else {

  this.messageClass = "alert alert-danger"
  this.updateMessage = data.message

}



})

}



logOut(){

this.user.loginOut().subscribe (  (data) => {


         if (data.status === true) {
           this.auth.setLoggedInStatus (false)
           this.router.navigate([''])

         } else {
           console.log ('problem loginOut')
         }
  })
}


messageClass = ''

topscore = 0
totalLines = 0
totalTime = 0

updateMessage= ''
messageQuote = 'Loading your Quote';
messageEmail= 'Loading your ID'



}
