import { Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements AfterViewInit {
@ViewChild('seconds') el:ElementRef;


/*
@ViewChild ('mins') mins:ElementRef;
@ViewChild ('hours') hours:ElementRef;
*/






  constructor() { }

  ngAfterViewInit() {
    console.log ('timer1')
    console.log (this.el.nativeElement)


  }
console.log ('timer')
console.log (this.el.nativeElement)















}
