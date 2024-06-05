import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { DistribuidorComponent } from './components/distribuidor/distribuidor.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {path:'',component: IndexComponent},
  {path:'registro',component: RegistroComponent},
  {path:'cliente',component: ClienteComponent},
  {path:'distribuidor',component: DistribuidorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
