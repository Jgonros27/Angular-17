import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'astericPassword',
  standalone: true
})
export class AstericPasswordPipe implements PipeTransform {

  transform(value: string): string {
    const numeroLetras = value.length;
    let passOculta = "";
    for (let index = 0; index < numeroLetras; index++) {
      passOculta = passOculta +"*"
    }
    return passOculta;
  }

}
