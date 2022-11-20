import { Component } from '@angular/core';
import {  UsuarioService} from "../../services/usuario.service";
import { Usuario } from "../../models/usuarioModel";
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  usuario! : Usuario

  constructor(
    private _usuarioService : UsuarioService,
    private router : Router
  ) { 
    this.usuario = new Usuario('','','','','','','')
  }


  onSubmit(form:any){
    
    this._usuarioService.consultar_usuario(this.usuario.nit,this.usuario.correo).subscribe(
      response =>{
        localStorage.setItem('nitUsuario', response.token.recordset[0].nit);          
        localStorage.setItem('correoUsuario', response.token.recordset[0].correo); 
        localStorage.setItem('Nombre', response.token.recordset[0].nombre ); 
        localStorage.setItem('Apellido', response.token.recordset[0].apellido );
        localStorage.setItem('Rol', response.token.recordset[0].id_tipo_rol );
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Logeo exitoso',
          showConfirmButton: false,
          timer: 3000
        })
        
        this.router.navigate(['convocatorias']);
        
        
        
      },error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.message,         
        })
        console.log(error)
      }
    )
  }
}
