import { Pipe, PipeTransform } from '@angular/core';

/**
 * In case that user might need to filter/search for specific year into the list of years
 * This pipe is helping to filter data
 * The list of years is an array of numeric values so by default it is not possible to look for 20 in a list of (2005,2006,2010 , etc)
 * To solve this problem it needs to change to string , filter the list and revert the filtered list to its original format
 */
@Pipe({
  name: 'seasonFilter',
})
export class SeasonFilterPipe implements PipeTransform {
  transform(list: Array<number>, arg: string): Array<number> {
    return list.filter((x) => x.toString().includes(arg));
  }
}
