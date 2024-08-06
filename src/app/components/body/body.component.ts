import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-body',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './body.component.html',
    styleUrl: './body.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BodyComponent {
    //declarar variables que vamos a declarar en la platilla
    public titulo:string="Angular 17";
    public datos={
        nombre:"Juan Francisco",
        apellidos:"Gonzalez Rosal"
    }
}
