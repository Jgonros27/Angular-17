import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-for17',
  standalone: true,
  imports: [],
  templateUrl: './ng-if-for17.component.html',
  styles: ``
})
export class NgIfFor17Component {
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
