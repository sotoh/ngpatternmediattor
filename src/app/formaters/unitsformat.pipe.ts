import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unitsformat',
})
export class UnitsformatPipe implements PipeTransform {
  transform(value: number, type: string): string {
    switch (type) {
      case 'Remolque':
        if (value) {
          if (value < 10) {
            return `SR-0${value}`;
          }
          return `SR-${value}`;
        }
        return ``;
      case 'Dolly':
        if (value) {
          if (value < 10) {
            return `D-0${value}`;
          }
          return `D-${value}`;
        }
        return ``;
      case 'Tracto':
        if (value) {
          if (value < 10) {
            return `TC-0${value}`;
          }
          return `TC-${value}`;
        }
        return ``;
    }
    return '';
  }
}
