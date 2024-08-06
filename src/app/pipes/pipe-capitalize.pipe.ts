import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeCapitalize',
  standalone: true
})
export class PipeCapitalizePipe implements PipeTransform {

  transform(value: string,): string {
    let aPalabras = value.split(" ");
    let fraseMayus = "";
    for (let index = 0; index < aPalabras.length; index++) {
      aPalabras[index] = aPalabras[index].slice(0,1).toUpperCase() + aPalabras[index].slice(1);
      fraseMayus = fraseMayus +" " + aPalabras[index];
    }
    return fraseMayus;
  }

}
