import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth.guard";
import { UserGuard } from "./user.guard";
//Componentes
import { ContactoComponent } from './components/contacto/contacto.component';
import { ConvocatoriaComponent } from './components/convocatoria/convocatoria.component';
import { ConvocatoriasComponent } from './components/convocatorias/convocatorias.component';
import { CrearConvocatoriaComponent } from './components/crear-convocatoria/crear-convocatoria.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { ManejoConvocatoriasComponent } from './components/manejo-convocatorias/manejo-convocatorias.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { RegistroComponent } from './components/registro/registro.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';


const routes: Routes = [
  { path: '',component: ConvocatoriasComponent },
  { path: 'convocatorias', component:  ConvocatoriasComponent},
  { path: 'convocatoria/:idConvocatoria', component:  ConvocatoriaComponent},
  { path: 'nosotros', component:  NosotrosComponent},
  { path: 'crearConvocatoria', component:  CrearConvocatoriaComponent, canActivate:[AuthGuard]},
  { path: 'manejoUsuarios', component:  UsuariosComponent, canActivate:[AuthGuard]},
  { path: 'usuario/:nit', component:  UsuarioComponent, canActivate:[AuthGuard]},
  { path: 'favoritos/:nit', component:  FavoritosComponent, canActivate:[UserGuard]},
  { path: 'manejoConvocatorias', component:  ManejoConvocatoriasComponent},
  { path: 'registro', component:  RegistroComponent},
  { path: 'contacto', component:  ContactoComponent},
  { path: 'login', component:  LoginComponent},
  { path: '**', component:  ErrorComponent},
  

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
