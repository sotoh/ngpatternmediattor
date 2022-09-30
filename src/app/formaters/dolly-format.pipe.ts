import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollyFormat'
})
export class DollyFormatPipe implements PipeTransform {

  transform(value: number): string {
    if (value) {
      if (value < 10) {
        return `D-0${value}`;
      }
      return `D-${value}`;
    }
    return '';
  }

}
