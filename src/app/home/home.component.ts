import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private user:UserService) { }

  ngOnInit() {
    // set session call only from mainroute
    /*this.user.setSession().subscribe (
      (data)=>{
        console.log (data)
      }
    )*/

  }

}
