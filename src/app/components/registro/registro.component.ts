import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  constructor(private router: Router){

  }

  registrar(){
    alert("Cliente registrado con exito")
    this.router.navigate([''])
  }

  logout(){
    this.router.navigate([''])
  }

}
