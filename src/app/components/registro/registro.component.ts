import { Component } from '@angular/core';
import {  UsuarioService} from "../../services/usuario.service";
import { Usuario } from "../../models/usuarioModel";
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent {
  
  usuario! : Usuario

  constructor(
    private _usuarioService : UsuarioService,
    private router : Router
  ) { 
    this.usuario = new Usuario('','','','','',9,1)
  }

  onSubmit(form : any){


    this._usuarioService.crear_usuario(this.usuario).subscribe(
      response => {
        // localStorage.setItem('nitUsuario', response.resultados.recordset[0].nit); 
        // localStorage.setItem('rol', response.resultados.recordset[0].id_tipo_rol); 
        // localStorage.setItem('correoUsuario', response.resultados.recordset[0].correo); 
        // localStorage.setItem('Nombre', response.resultados.recordset[0].nombre ); 
        // localStorage.setItem('Apellido', response.resultados.recordset[0].apellido );
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Registro exitoso',
          showConfirmButton: false,
          timer: 3000
        })
        
        this.router.navigate(['convocatorias']);

      }, error => {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.message,         
        })

      }
    )
  }

}
