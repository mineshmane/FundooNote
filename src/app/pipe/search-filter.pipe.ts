import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
 
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
// console.log(" pipe called",args);
// console.log(" value called ",value);


    if(!args){
      return value;
    }else{
      args=args.toLocaleLowerCase();
    }
    return value.filter(item =>{
      return  item.label.toLocaleLowerCase().includes(args);
          // return  item.label.startsWith(args)==true
    })
 
  }

 

}
