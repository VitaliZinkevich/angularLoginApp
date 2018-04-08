import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'
import {AuthService} from '../auth.service'

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
              private auth: AuthService) { }

ngOnInit() {

this.user.getDataForMESSAGE().subscribe ( <backData> (data) => {
        this.message = data.respond

  })





}




message = 'LOADING...';




}
