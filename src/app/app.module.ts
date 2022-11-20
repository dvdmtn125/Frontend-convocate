import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule , HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ConvocatoriaComponent } from './components/convocatoria/convocatoria.component';
import { ConvocatoriasComponent } from './components/convocatorias/convocatorias.component';
import { ErrorComponent } from './components/error/error.component';
import { CrearConvocatoriaComponent } from './components/crear-convocatoria/crear-convocatoria.component';
import { ManejoConvocatoriasComponent } from './components/manejo-convocatorias/manejo-convocatorias.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NosotrosComponent,
    RegistroComponent,
    ContactoComponent,
    ConvocatoriaComponent,
    ConvocatoriasComponent,
    ErrorComponent,
    CrearConvocatoriaComponent,
    ManejoConvocatoriasComponent,
    UsuariosComponent,
    UsuarioComponent,
    FavoritosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
