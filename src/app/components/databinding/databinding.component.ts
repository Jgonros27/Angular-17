import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule, NgStyle],
  templateUrl: './databinding.component.html',
  styles: ``
})
export class DatabindingComponent {
  public binding:string="green"
}
