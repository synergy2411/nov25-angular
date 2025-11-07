import { Pipe, PipeTransform } from '@angular/core';

type Todo = {
  label: string;
  status: string;
};

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: Todo[], orderBy: string) {
    if (orderBy === 'asc') {
      // write code for ascending order
    } else {
      // write code for decending order
    }
    return value;
  }
}
