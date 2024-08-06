import { Component, OnInit, ViewChild, inject } from '@angular/core';

import { NgStyle } from '@angular/common';

import { Cliente } from '../../../modelos/cliente';
import { ClienteService } from '../../../servicios/cliente.service';
import Swal from 'sweetalert2'; // importar sweetalert
import {MatSnackBar} from '@angular/material/snack-bar';

import { Router } from '@angular/router';

import { MaterialModule } from '../../../material/material/material.module';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [NgStyle,MaterialModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit{
//inyectar el servicio cliente
private serv_client = inject(ClienteService);
 public displayedColumns: string[] = ['id', 'nameCliente', 'emailCliente', 'tlfnoCliente','empresaCliente','acciones'];
 public dataSource!: MatTableDataSource<Cliente>;
 private _snackBar = inject(MatSnackBar);
  public router = inject(Router);
 //paginador
 @ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sort!: MatSort;

 ngOnInit(): void {
   this.mostrarClientes();
 }

 mostrarClientes():void{
  this.serv_client.getClientes().subscribe(
    res=>{
      //cargar los datos al datasource de la tabla
      this.dataSource = new MatTableDataSource(res);
      //paginacion
      this.dataSource.paginator = this.paginator;
      //ordenar
      this.dataSource.sort = this.sort;
    }
  )
 }

 anadir():void{
    this.router.navigate(["/formcrud"]);
 }
 editarCliente(id:number):void{
  this.router.navigate([`/formcrud/${id}`]);
 }

 eliminarCliente(cliente:Cliente):void{
  Swal.fire({
    title:`¿Desea eliminar el cliente ${cliente.nameCliente}?`,
    showCancelButton:true,
    confirmButtonText:"Eliminar",
    cancelButtonText:"Cancelar",
    focusConfirm:false
  }).then(result=>{
    if (result.isConfirmed) {
      this.serv_client.delCliente(Number(cliente.id)).subscribe(
        res=>{
          this._snackBar.open("cliente eliminado","Cerrar",{
            duration:1500,
            verticalPosition:'top',
            panelClass:["style_snackbar"]
          });
          this.mostrarClientes(); //refrescar
        }
      )
    }
  })
 }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
}
