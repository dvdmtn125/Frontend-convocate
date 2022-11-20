import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Usuario } from "../../models/usuarioModel";
import { UsuarioService } from "../../services/usuario.service";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent {

  usuarios!: Usuario[]
  nitUsuario!: any
  mensaje = 'hola'
  modificarUsuario: boolean = false

  constructor(
    private _usuarioService: UsuarioService,
    private router: Router
  ) {
    this._usuarioService.consultar_usuarios().subscribe(
      response => {
        this.usuarios = response.resultados.recordset
      }, error => {

      }
    )
  }


  actualizarUsuario(nit: any) {
    this.nitUsuario = nit
    this.modificarUsuario = true
    
  }

  eliminarUsuario(nit: any) {
    this._usuarioService.eliminar_usuario(nit).subscribe(
      response => {

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuario Eliminado',
          showConfirmButton: false,
          timer: 5000
        })
        window.location.reload()


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
