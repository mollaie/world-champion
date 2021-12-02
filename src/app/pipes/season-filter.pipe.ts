import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seasonFilter',
})
export class SeasonFilterPipe implements PipeTransform {
  transform(list: Array<number>, arg: string): Array<number> {
    return list.filter((x) => x.toString().includes(arg));
  }
}
