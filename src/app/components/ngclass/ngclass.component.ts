import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  standalone: true,
  imports: [NgClass],
  templateUrl: './ngclass.component.html',
  styles: ``
})
export class NgclassComponent {
  public claseAlerta:string="alert alert-success"
}
