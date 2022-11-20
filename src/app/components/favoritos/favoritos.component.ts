import { Component} from '@angular/core';
import { ConvocatoriaModel } from "../../models/convocatoria";
import {  ConvocatoriasService } from "../../services/convocatorias.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styles: [
  ]
})
export class FavoritosComponent {

  nitUsuario! : any
  convocatorias! : ConvocatoriaModel[]

  constructor(
    private _convocatoriasService : ConvocatoriasService,
    private _route : ActivatedRoute
  ) { 
    this._route.params.subscribe(params => {
      this.nitUsuario = params['nit']
      this._convocatoriasService.consultar_favoritos(this.nitUsuario).subscribe(
        response => {
          this.convocatorias= response.resultados.recordset          
        },error => {
          console.log(error)
        }
      )
      
    })

  }

  eliminarFavorito(idConvocatoria : any){
    let data = {
      'id_convocatoria' : idConvocatoria,
      'nit' : this.nitUsuario
    }
    this._convocatoriasService.eliminar_favorito(data).subscribe(
      response => {
       
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Eliminado',
          showConfirmButton: false,
          timer: 4000
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
