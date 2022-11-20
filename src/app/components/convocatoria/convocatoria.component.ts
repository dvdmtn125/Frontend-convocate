import { Component } from '@angular/core';
import { ConvocatoriasService } from "../../services/convocatorias.service";
import { ConvocatoriaModel } from "../../models/convocatoria";

import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-convocatoria',
  templateUrl: './convocatoria.component.html',
  styles: [
  ]
})
export class ConvocatoriaComponent {

  convocatoria! : ConvocatoriaModel ;

  constructor(
    private _convocatoriasService: ConvocatoriasService,
    private _route: ActivatedRoute
  ) {
    this._route.params.subscribe(params => {
      let id_convocatoria = params['idConvocatoria']
      this._convocatoriasService.consultar_convocatoria(id_convocatoria).subscribe(
        response => {          
          this.convocatoria = response.resultados.recordset[0]                
        }, error => {
          console.log(error)
        }
      )      
      
    }
    )
  }

}
