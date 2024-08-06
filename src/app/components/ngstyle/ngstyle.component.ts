import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './ngstyle.component.html',
  styles: ``
})
export class NgstyleComponent {
  public size:number=20;
  aumentarSize(){
    this.size+=5;
  }
}
