import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'containerFormat'
})
export class ContainerFormatPipe implements PipeTransform {

  transform(value: number): string {
    if (value) {
      if (value < 10) {
        return `SR-0${value}`;
      }
      return `SR-${value}`;
    }
    return '';
  }

}
