import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConvocatoriasService } from "../../services/convocatorias.service";
import { ConvocatoriaModel } from "../../models/convocatoria";
import { UsuarioService } from "../../services/usuario.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-convocatorias',
  templateUrl: './convocatorias.component.html',
  styles: [
  ]
})
export class ConvocatoriasComponent {

  nitUsuario!: any
  listaConvocatorias!: ConvocatoriaModel[];

  constructor(
    private _route: ActivatedRoute,
    private _convocatoriasService: ConvocatoriasService,
    public _usuarioService: UsuarioService,
    private router: Router
  ) {
    this.nitUsuario = localStorage.getItem('nitUsuario')
    this.consultarConvocatorias();

  }

  consultarConvocatorias() {
    this._convocatoriasService.consultar_convocatorias().subscribe(
      response => {
        this.listaConvocatorias = response.resultados.recordset
      }, error => {
        console.log(error)
      }
    )
  }

  agregarFavoritos(idConvocatoria: any) {

    let data = {
      "id_convocatoria" : idConvocatoria,
      "nit" : this.nitUsuario
    }

    this._convocatoriasService.verificar_favorito(data).subscribe(
      response =>{
        if(response.resultados.recordset[0] != null){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ya ha sido agregado a favoritos',
          })
        }else{
          this._convocatoriasService.agregar_favoritos(idConvocatoria, this.nitUsuario).subscribe(
            response => {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Agregado a favorito',
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
    )

    
  }

  eliminarConvocatoria(id: any) {
    this._convocatoriasService.eliminar_convocatoria(id).subscribe(
      response => {

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Convocatoria Eliminado',
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
