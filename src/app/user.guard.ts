import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UsuarioService } from "./services/usuario.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(
    private usuario_service: UsuarioService,
    private router: Router
  ){}

  canActivate(): boolean{
    if(this.usuario_service.esUsuario()){
      return true;
    }
    this.router.navigate(['/']);
    
    return false;
  }
  
  
}
