import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value = value.toString()
    if (value.length == 1) {

          value = '0'+value
          return value;
    } else {

      return value;

    }


  }

}
