import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spendedTime'
})
export class SpendedTimePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let time  = value

    let hours = Math.floor(time/60/60)

    if (hours<1) {
      hours = 0
    }

    time = time-hours*60*60


    let minutes= Math.floor (time/60) //minutes

    time = time-minutes*60

    let seconds = Math.floor (time) // sec secLeft

    let  pasredTime = hours.toString()+' hours '+ minutes.toString()+' minutes ' + seconds.toString() + ' seconds'


    return pasredTime;
  }

}
