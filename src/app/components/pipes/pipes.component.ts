import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PipeFiltListPipe } from '../../pipes/pipe-filt-list.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, PipeFiltListPipe],
  templateUrl: './pipes.component.html',
  styles: ``
})
export class PipesComponent {
  public nombre:string="maRía cAno";
  public numero:number=12345.6789;
  public fecha:Date = new Date();
  public porcentaje:number=0.12;
  public aLista:number[]=[23,67,4,10,33,54]
}
