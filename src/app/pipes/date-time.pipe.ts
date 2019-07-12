import { Pipe, PipeTransform } from '@angular/core';
import { Constants} from '../model/constatnt';
import { DatePipe } from '@angular/common';
@Pipe({
  name: 'dateTime'
})
export class DateTimePipe extends DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return super.transform(value, Constants.DATE_TIME_FMT);

  }

}
