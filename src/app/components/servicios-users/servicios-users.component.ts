import { Component, inject } from '@angular/core';
import { UsersService } from '../../servicios/users.service';
import { User } from '../../modelos/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios-users',
  standalone: true,
  imports: [],
  templateUrl: './servicios-users.component.html',
  styles: ``
})
export class ServiciosUsersComponent {
  // public aUsuarios!:User[];

  // constructor(private serv_usuarios:UsersService){ //injectamos el servicio de usuarios
  //   //cargar el array
  //   this.aUsuarios = serv_usuarios.aUsers;

  // } // previo a la version 17 de angular

  /**Version 17 */

  public aUsuarios = inject(UsersService).aUsers

  public router = inject(Router);

  cargarHome():void{
    this.router.navigate(["/body"]);
  }
}
