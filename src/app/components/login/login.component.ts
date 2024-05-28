import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router){

  }

  abrirRegistro(){
    this.router.navigate(['registro'])
  }

  ingresarCliente(){
    this.router.navigate(['cliente'])
  }
  ingresarDistribuidor(){
    this.router.navigate(['distribuidor'])
  }

}
