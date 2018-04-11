import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'
import {AuthService} from '../auth.service'
import {Router} from '@angular/router'

interface backData {
email: string,
password: string,
quote: string
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


        this.messageQuote = data.quote
        this.messageEmail = data.email

  })


}



saveNewQuote (e){
e.preventDefault()

const newQuote = e.target.newQuote.value

if (newQuote.length < 3) {
this.updateMessage = 'qoute at least 3 letter'
  return false
}


console.log (newQuote)


this.user.quoteUpdate(newQuote). subscribe ((data)=> {

if (data.status == true) {

this.messageQuote = data.quote;

}

this.updateMessage = data.message

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






updateMessage= ''
messageQuote = 'Loading your Quote';
messageEmail= 'Loading your ID'



}
