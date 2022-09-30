import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nodriver'
})
export class NodriverPipe implements PipeTransform {

  transform(value: string, tc: number ): string {
    if (tc) {
      if (value) {
        return value;
      } else {
        return 'Sin Operador';
      }
    } else {
      return 'Sin Unidad';
    }
  }
}
