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

        console.log (data)

        this.messageQuote = data.quote
        this.messageEmail = data.email

        this.topscore = data.topScore
        this.totalLines = data.totalRows

        let time  =  data.spendedTime

        let hours = Math.floor(time/60/60)

        if (hours<1) {
          hours = 0
        }

        time = time-hours*60*60


        let minutes= Math.floor (time/60) //minutes

        time = time-minutes*60

        let seconds = Math.floor (time) // sec secLeft

      let  pasredTime = hours.toString()+' часов'+ minutes.toString()+' минут ' + seconds.toString() + ' секунд'






        this.totalTime = pasredTime

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

this.messageQuote = data.qoute;

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




topscore = 0
totalLines = 0
totalTime = ""

updateMessage= ''
messageQuote = 'Loading your Quote';
messageEmail= 'Loading your ID'



}
