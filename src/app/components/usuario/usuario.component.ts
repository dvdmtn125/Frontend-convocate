import { Component, Input } from '@angular/core';
import { Usuario } from "../../models/usuarioModel";
import { UsuarioService } from "../../services/usuario.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent {

  usuario!: Usuario

  @Input() nit: any;

  constructor(
    private _usuarioService: UsuarioService,
    private _route: ActivatedRoute,
    private router : Router
  ) {
    console.log(this.nit)
    this._usuarioService.buscar_usuario(this.nit).subscribe(
      response => {
        this.usuario = response.resultados.recordset[0]      
      }, error => {

      }
    )
      /* this._route.params.subscribe(params => {
        let nit = params['nit']
        this._usuarioService.buscar_usuario(nit).subscribe(
          response => {
            this.usuario = response.resultados.recordset[0]      
          }, error => {

          }
        )      

      }
    ) */
  }

  onSubmit(form: any) {
    this._usuarioService.modificar_usuario(this.usuario).subscribe(
      response => {
        
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Actualizado',
          showConfirmButton: false,
          timer: 5000
        })
        this.router.navigate(['manejoUsuarios']);        

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
