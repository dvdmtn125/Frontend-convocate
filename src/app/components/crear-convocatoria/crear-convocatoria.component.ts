import { Component } from '@angular/core';
import { ConvocatoriaModel } from "../../models/convocatoria";
import { ConvocatoriasService } from "../../services/convocatorias.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-convocatoria',
  templateUrl: './crear-convocatoria.component.html',
  styles: [
  ]
})
export class CrearConvocatoriaComponent  {

  convocatoria! : ConvocatoriaModel

  constructor(
    private _convocatoriaService : ConvocatoriasService
  ) { 
    this.convocatoria = new ConvocatoriaModel('','','','','','','','','','');
  }


  onSubmit(form:any){
    this._convocatoriaService.crear_convocatoria(this.convocatoria).subscribe(
      response => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Registro Convocatoria Exitoso',
          showConfirmButton: false,
          timer: 3000
        })
                

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
