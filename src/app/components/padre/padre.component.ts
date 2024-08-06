import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [FormsModule, HijoComponent],
  templateUrl: './padre.component.html',
  styles: ``
})
export class PadreComponent {
  public aLista:string[] = [];
  public mensajeAlHijo!:string;
  public mensaje!:string;

  envio(){
    this.mensajeAlHijo = this.mensaje;
    this.aLista.push(this.mensaje);
  }

}
