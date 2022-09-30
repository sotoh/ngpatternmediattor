import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'nullformat'
})
export class NullformatPipe implements PipeTransform {

  transform(value: Date): string {
    if (value) {
      return moment(value).format('DD/MM/YYYY');
    }
    return '';
  }

}
