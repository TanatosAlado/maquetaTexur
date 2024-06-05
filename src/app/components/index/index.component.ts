import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

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

  logout(){
    this.router.navigate([''])
  }


}
