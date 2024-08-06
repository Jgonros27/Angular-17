import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClienteService } from '../../../servicios/cliente.service';
import { MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from '../../../material/material/material.module';




@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule],
  templateUrl: './formulario.component.html',
  styles: ``
})
export class FormularioComponent implements OnInit {
  public frm!:FormGroup
  private fb = inject(FormBuilder);
  private serv_client = inject(ClienteService);
  private _snackBar = inject(MatSnackBar);
  private _router = inject(Router);
  private _activedRouter = inject(ActivatedRoute); // extraer los parámetros de la url
  private idCliente!:number;
  public titulo!:string;

  ngOnInit(): void { // se ejecuta al cargar el componente
    //establecer las validaciones al formulario
    this.frm = this.fb.group({
      id: new FormControl({value:"",disabled:true}),
      nameCliente:['',[Validators.required, Validators.pattern(/^[a-zá-éñ\s]{1,50}$/i)]],
      emailCliente:['',[Validators.required,Validators.email]],
      tlfnoCliente:['',[Validators.required,Validators.pattern(/^[0-9]{9}$/)]],
      empresaCliente:['',[Validators.required]]
    })

    //extraer los parámetros de la url
    this._activedRouter.params.subscribe(
      params=>{
        this.idCliente = params['id']
        if (this.idCliente) {
          this.cargarCliente();
          this.titulo = "Actualizar cliente"
        }else{
          this.titulo = "Añadir cliente"
        }
      }
    )

  }


  /**
   * Getter
   */
  get nameCliente(){
    return this.frm.get("nameCliente") as FormControl
  }

  get emailCliente(){
    return this.frm.get("emailCliente") as FormControl
  }

  get tlfnoCliente(){
    return this.frm.get("tlfnoCliente") as FormControl
  }

  get empresaCliente(){
    return this.frm.get("empresaCliente") as FormControl
  }

  grabarDatos():void{
    if (this.frm.controls['id'].value =="") {
      this.anadirCliente();
    }else{
      this.actualizarCliente();
    }
  }

  mensaje(mensaje:string):void{
    this._snackBar.open(mensaje,"Cerrar",{
      duration:1500,
      verticalPosition:"top"
    })
  }

  anadirCliente():void{
      this.serv_client.addCliente(this.frm.value).subscribe(
        res=>{
          if (res) {
            this.mensaje("El cliente ha sido grabado");
            this.frm.reset(); // limpiar el formulario
            this._router.navigate(['/crud']); // Cargar el componente crud
          }else{
            this.mensaje("El cliente no se pudo grabar")
          }
        }
      )
  }

  actualizarCliente():void{
    const id:number = this.frm.controls['id'].value;
    this.serv_client.updateCliente(this.frm.value, id).subscribe(
      res=>{
        if (res) {
          this.mensaje("El cliente ha sido actualizado");
          this.frm.reset(); // limpiar el formulario
          this._router.navigate(['/crud']); // Cargar el componente crud
        }else{
          this.mensaje("El cliente no se pudo actualizar")
        }
      }
    )
  }

  cargarCliente():void{
    this.serv_client.getCliente(this.idCliente).subscribe(
      res=>{
        if (res) {
          //cargar los datos al formulario
        this.frm.controls['id'].setValue(res.id);
        this.frm.controls['nameCliente'].setValue(res.nameCliente);
        this.frm.controls['emailCliente'].setValue(res.emailCliente);
        this.frm.controls['tlfnoCliente'].setValue(res.tlfnoCliente);
        this.frm.controls['empresaCliente'].setValue(res.empresaCliente);
        }else{
          this.mensaje("El cliente no existe");
          this._router.navigate(['/crud']);
        }
        
      }
    )
  }

}
