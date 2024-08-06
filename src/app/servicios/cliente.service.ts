import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Cliente } from '../modelos/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url="http://localhost:3000"
  //inyectar HttpClient
  private http=inject(HttpClient);

  getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.url}/clientes`).pipe(
      catchError(error=>{
        console.log(`Error al obtener los clientes: ${error}`);
        return of ([]);
      })
    )
  }


  delCliente(id:number):Observable<boolean>{
    return this.http.delete(`${this.url}/clientes/${id}`).pipe(
      map(()=>true),
      catchError(error=>{
        console.log(`Error al eliminar el cliente: ${error}`);
        return of (false);
      })
    )
  }

  getCliente(id:number):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.url}/clientes/${id}`).pipe(
      map(res=>{
        return res;
      }),
      catchError(error=>{
        console.log(`Error al obtener el cliente: ${error}`);
        return of ({} as Cliente);
      })
    )
  }

  addCliente(cliente:Cliente):Observable<boolean>{
    return this.http.post<Cliente>(`${this.url}/clientes`,cliente).pipe(
      map(res=>{
        return true;
      }),
      catchError(error=>{
        console.log(`Error al insertar el cliente: ${error}`);
        return of (false);
      })
    )
  }

  updateCliente(cliente:Cliente, id:number):Observable<boolean>{
    return this.http.put<Cliente>(`${this.url}/clientes/${id}`,cliente).pipe(
      map(res=>{
        return true;
      }),
      catchError(error=>{
        console.log(`Error al actualizar el cliente: ${error}`);
        return of (false);
      })
    )
  }


}
