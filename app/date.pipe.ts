import {Pipe, PipeTransform} from '@angular/core';
import {Food} from './food.model';

@Pipe({
  name: "date",
  pure: false
})
export class DatePipe implements PipeTransform {
  transform(input: Food[], selectdate){
    var output: Food[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].day == selectdate) {
        output.push(input[i]);
      }
      if (selectdate == 100){
        return input
      }
    }
    return output;
  }
}
