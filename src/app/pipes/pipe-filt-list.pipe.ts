import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFiltList',
  standalone: true
})
export class PipeFiltListPipe implements PipeTransform {

  transform(value: number[], min:number,max:number): number[] {
    if (!value && !min && !max) {
      return value;
    }
    value=value.filter(elemento=>elemento>=min && elemento <=max);
    return value.sort((a,b)=>a-b);
  }

}
