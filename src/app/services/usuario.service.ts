import { Injectable } from '@angular/core';
import { Global } from "./global";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { Usuario } from "../models/usuarioModel";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public url: String;

  constructor(
    private _http: HttpClient,
    private router: Router
  ) {
    this.url = Global.url
  }

  crear_usuario(usuario: Usuario): Observable<any> {

    let params = JSON.stringify(usuario);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'crear_usuario', params, { headers: headers });
  }

  modificar_usuario(usuario: Usuario): Observable<any> {

    let params = JSON.stringify(usuario);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'modificar_usuario', params, { headers: headers });
  }



  eliminar_usuario(nit: any): Observable<any> {

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'eliminar_usuario/' + nit, { headers: headers });
  }

  consultar_usuario(nit: any, correo: any): Observable<any> {

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'consultar_usuario/' + nit + '/' + correo, { headers: headers });
  }

  buscar_usuario(nit: any): Observable<any> {

    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'Buscar_usuario/' + nit , { headers: headers });
  }

  consultar_usuarios(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + "/listar_usuario", { headers: headers });
  }

  loggedIn() {
    return !localStorage.getItem('nitUsuario');
  }
 
 
  esAdministrador() {
    if (localStorage.getItem('Rol') == '8') {
      return true
    } else {
      return false
    }
  }

  esUsuario() {
    if (localStorage.getItem('Rol') == '9') {
      return true
    } else {
      return false
    }
  }

  nitUsuario(){
    return localStorage.getItem('nitUsuario')
  }

  logout() {
    localStorage.removeItem('nitUsuario');
    localStorage.removeItem('rol');
    localStorage.removeItem('correoUsuario');
    localStorage.removeItem('Nombre');
    localStorage.removeItem('Apellido');
    localStorage.removeItem('Rol');
    this.router.navigate(['/']);
  }

}
