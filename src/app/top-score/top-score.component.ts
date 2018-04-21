import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

interface topScore {
  email: string,
  quote: string,
  topScore: number,
  totalRows: number,
  spendedTime :number,
}

@Component({
  selector: 'app-top-score',
  templateUrl: './top-score.component.html',
  styleUrls: ['./top-score.component.css']
})
export class TopScoreComponent implements OnInit {

top: topScore

  constructor(private user: UserService ) { }

  ngOnInit() {

    this.getTopThree()

  }

getTopThree(){
  this.user.getTop().subscribe((data)=>{

    
    this.top = data

  })
}



}
