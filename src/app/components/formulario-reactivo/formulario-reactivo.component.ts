import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Alumnos } from '../../modelos/alumnos';
import { CommonModule } from '@angular/common';
import { AstericPasswordPipe } from '../../pipes/asteric-password.pipe';



@Component({
  selector: 'app-formulario-reactivo',
  standalone: true,
  imports: [ReactiveFormsModule, AstericPasswordPipe],
  templateUrl: './formulario-reactivo.component.html',
  styles: ``
})
export class FormularioReactivoComponent implements OnInit {
  //declarar un objeto formulario de tipo FormGroup

  public frm!:FormGroup // |undefined
  public aAlumnos:Alumnos[] = []
  constructor(private fb:FormBuilder){}//se inyecta el servicio. Es una practica habitual de angular

  ngOnInit(): void { // se ejecuta al cargar el componente
    //establecer las validaciones al formulario
    this.frm = this.fb.group({
      name:['',[Validators.required, Validators.pattern(/^[a-zá-éñ\s]{1,50}$/i)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]],
      repassword:['',[Validators.required,this.idemPassword.bind(this)]],
      terminos:['',[Validators.requiredTrue]],
    })
  }

  //la funcion para controlar las password repetidas
  idemPassword(control:AbstractControl){
    if (this.frm) {
      const password= this.frm.get("password")?.value;
      const repassword = control.value;

      return password===repassword ?null :{passwordIdem:true};
    }else{
      return null;
    }
    
    
  }

  /**
   * Getter
   */
  get name(){
    return this.frm.get("name") as FormControl
  }

  get email(){
    return this.frm.get("email") as FormControl
  }

  get password(){
    return this.frm.get("password") as FormControl
  }

  get repassword(){
    return this.frm.get("repassword") as FormControl
  }

  get terminos(){
    return this.frm.get("terminos") as FormControl
  }

  enviarDatos(){
    const datos = this.frm.value
    delete datos.repassword;
    console.log(datos);
    this.aAlumnos.push(datos)

  
  }

  

}
