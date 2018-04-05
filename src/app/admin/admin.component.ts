import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'

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

constructor ( private user: UserService) { }

ngOnInit() {
  this.user.getData().subscribe ( <backData> (data) => {

    console.log(data)
    this.message = data.respond


  })

}




message = 'LOADING...';




}
