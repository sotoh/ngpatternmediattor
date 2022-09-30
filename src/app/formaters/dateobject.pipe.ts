import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateobject'
})
export class DateobjectPipe implements PipeTransform {

  transform(value: Date): string {
    if (value) {
      console.log(value);
      return moment(value).format('DD/MM/YYYY');
    } else {
      return '';
    }
  }
}
