/************************************************************************************************        
*  Purpose         : To show date in user formate pipe service
* 
*  @file           : date-time.pipe.ts
*  @author         : Minesh Mane <mineshmane94@gmail.com>
*  @since          : 4-2-2019
*
*************************************************************************************************/

import { Pipe, PipeTransform } from '@angular/core';
import { Constants} from '../model/constatnt';
import { DatePipe } from '@angular/common';
@Pipe({
  name: 'dateTime',

})
export class DateTimePipe extends DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return super.transform(value, Constants.DATE_TIME_FMT);

  }

}
