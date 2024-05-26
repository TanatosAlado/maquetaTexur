import { Component } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {

  perfil: boolean = true
  compras: boolean = false
  postventa: boolean = false
  elearning: boolean = false
  mensajero: boolean = false
  selected: string = 'perfil'
  productos: any[] = [{nombre: 'Destornillador', precio: 55},{nombre: 'destornillador', precio: 55},{nombre: 'destornillador', precio: 55}
  ,{nombre: 'destornillador', precio: 55},{nombre: 'destornillador', precio: 55},{nombre: 'Destornillador', precio: 55}]

  productosRes: any[] = [{nombre: 'destornillador', precio: 55}]

  constructor(){

  }

  cambio(parametro: string){
    this.perfil= false
    this.compras= false
    this.postventa= false
    this.elearning= false
    this.mensajero= false

    switch (parametro) {
      case 'perfil': 
        this.perfil = true
        break;
      case 'compras': 
        this.compras = true
        break;
      case 'postventa': 
        this.postventa = true
        break;
      case 'elearning': 
        this.elearning = true
        break;
      case 'mensajero': 
        this.mensajero = true
        break;
    }
  }

  seleccionar(seccion: string) {
    this.selected = seccion;
  }

  actualizar(){

  }





}
