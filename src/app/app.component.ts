import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { UsuarioService } from "./services/usuario.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre = localStorage.getItem('Nombre')
  apellido =  localStorage.getItem('Apellido')
 // nit =  localStorage.getItem('nitUsuario')
 nit = this.usuarioService.nitUsuario()
  

  constructor(
    public usuarioService : UsuarioService
  ){    
   
  }
}
