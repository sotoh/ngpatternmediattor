import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'daysFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Date): any {
    if (value) {
      const date = moment(value).format('YYYY-MM-DD');
      return moment().diff(date, 'days');
    }
    return '';
  }

}
