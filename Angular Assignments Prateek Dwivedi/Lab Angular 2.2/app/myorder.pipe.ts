import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myorder'
})
export class MyorderTestPipe1 implements PipeTransform {
  transform(items: any[], field: string, reverse: boolean = false): any[] {
    if (!items) return [];

    if (field) items.sort((p, q) => p[field] > q[field] ? 1 : -1);
    else items.sort((p, q) => p > q ? 1 : -1);

    if (reverse) items.reverse();

    return items;
  }
}
 
