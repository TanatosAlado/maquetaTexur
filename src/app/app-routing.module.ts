import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { DistribuidorComponent } from './components/distribuidor/distribuidor.component';

const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'registro',component: RegistroComponent},
  {path:'cliente',component: ClienteComponent},
  {path:'distribuidor',component: DistribuidorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
