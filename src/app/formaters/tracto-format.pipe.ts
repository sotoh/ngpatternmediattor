import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tractoFormat'
})
export class TractoFormatPipe implements PipeTransform {

  transform(value: number): string {
    if (value) {
      if (value < 10) {
        return `TC-0${value}`;
      }
      return `TC-${value}`;
    }
    return ``;
  }

}
