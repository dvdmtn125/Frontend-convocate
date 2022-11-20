import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UsuarioService } from "./services/usuario.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private ingresar_service: UsuarioService,
    private router: Router
  ){}
  canActivate(): boolean{
    if(this.ingresar_service.esAdministrador()){
      return true;
    }
    this.router.navigate(['/']);
    
    return false;
  }
  
}
