import { Component, AfterViewInit} from '@angular/core';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements AfterViewInit {


sec = 0;
min = 0;
hour = 0;

timerId = undefined

  constructor() { }

  ngAfterViewInit() {

  }




public  startTimer() {

  this.sec = 0;
  this.min = 0;
  this.hour = 0;

  this.timerId = setInterval(() => {

    this.sec++;
  if(this.sec >59){this.sec=0;this.min++;
     if(this.min>59) {
     this.min=0;this.hour++;

      // if(this.hour <10) {this.hour= '0'+this.hour.toString()
     };
    }

  if(this.min<10){
  //  this.min= '0'+this.min.toString();}

                 }
  if(this.sec <10) {
    //this.sec = '0'+this.sec.toString()
          }
    },1000);
}

stopTimer (){

  clearInterval (this.timerId)


}
}
