import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hijo.component.html',
  styles: ``
})
export class HijoComponent {
  @Input() aLista!:string[];
  @Input() mensajeDelPadre!:string; //entrda del input
  @Output() mensajeDelHijo= new EventEmitter(); //Salida del parámetro hijo. Genera un evento

  envio():void{
    this.mensajeDelHijo.emit(this.mensajeDelPadre);
  }
}
