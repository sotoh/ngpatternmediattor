import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'equipmentformatter',
})
export class EquipmentformatterPipe implements PipeTransform {
  transform(value: number, type: number): string {
    switch (type) {
      case 1:
        if (value) {
          if (value < 10) {
            return `TC-0${value}`;
          }
          return `TC-${value}`;
        }
        break;
      case 2:
        if (value) {
          if (value < 10) {
            return `SR-0${value}`;
          }
          return `SR-${value}`;
        }
        break;
      case 3:
        if (value) {
          if (value < 10) {
            return `D-0${value}`;
          }
          return `D-${value}`;
        }
        break;
    }
    return '';
  }
}
