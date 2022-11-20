import { Injectable } from '@angular/core';
import { Global } from "./global";
import { HttpClient ,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import {  ConvocatoriaModel } from "../models/convocatoria";

@Injectable({
  providedIn: 'root'
})
export class ConvocatoriasService {

  public url:String;

  constructor(
    private _http : HttpClient
  ) { 
    this.url = Global.url
  }

  consultar_convocatorias() : Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.url+"/listar_convocatoria",{headers:headers});
  }

  consultar_convocatoria(idConvocatoria : any): Observable<any>{

    
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.url+'consultar_convocatoria/'+idConvocatoria, {headers: headers});
  } 

  consultar_favoritos(nit : any): Observable<any>{

    
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.url+'consultar_favorito/'+nit, {headers: headers});
  } 


  agregar_favoritos(idConvocatoria: any, nit : any): Observable<any>{
    
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.url+'crear_favorito/'+idConvocatoria+'/'+nit, {headers: headers});

}
eliminar_favorito(data: any): Observable<any>{

  let params = JSON.stringify(data);
  let headers = new HttpHeaders().set('Content-Type','application/json');

  return this._http.post(this.url+'eliminar_favorito', params, {headers: headers});

}

verificar_favorito(data: any): Observable<any>{

  let params = JSON.stringify(data);
  let headers = new HttpHeaders().set('Content-Type','application/json');

  return this._http.post(this.url+'verificar_favorito', params, {headers: headers});

}

  eliminar_convocatoria(idConvocatoria: any): Observable<any> {

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'eliminar_convocatoria/' + idConvocatoria , { headers: headers });
  }

  crear_convocatoria(convocatoria: ConvocatoriaModel): Observable<any>{

    let params = JSON.stringify(convocatoria);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.url+'crear_convocatoria', params, {headers: headers});

}

}
