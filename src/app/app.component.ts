import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgIfFor16Component } from './components/ng-if-for16/ng-if-for16.component';
import { NgIfFor17Component } from './components/ng-if-for17/ng-if-for17.component';
import { Switch16Component } from './components/switch16/switch16.component';
import { Switch17Component } from './components/switch17/switch17.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
import { NgclassComponent } from './components/ngclass/ngclass.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { Ejemplo1Component } from './components/ejemplo1/ejemplo1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,BodyComponent,NgIfFor16Component,NgIfFor17Component, Switch16Component,Switch17Component,NgstyleComponent,NgclassComponent,DatabindingComponent,PipesComponent,Ejemplo1Component, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto17';
}
