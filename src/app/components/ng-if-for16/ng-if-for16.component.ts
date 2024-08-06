import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-for16',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-if-for16.component.html',
  styles: ``
})
export class NgIfFor16Component {
  
  public bandera:boolean=true;

  public mensajeJavaScript={
    "nombre":"JavaScript",
    "descripcion":"Lenguaje de programacion scripting"
  }

  public mensajeAngular={
    "nombre":"Angular",
    "descripcion":"Es un framework de JavaScript"
  }

  public aLenguajes:string[]=["C++","C#","Java","PHP","JavaScript"]
  
  mostrar(){
    this.bandera=!this.bandera;

  }

}
