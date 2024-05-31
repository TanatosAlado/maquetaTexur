import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  garantiaPV: boolean = true
  serviciosPV: boolean = false
  contratoPV: boolean = false
  hizoConsulta: boolean = false

  selected: string = 'perfil'
  selectedPV: string = 'garantiaPV'
  productos: any[] = [{nombre: 'Destornillador', precio: 55},{nombre: 'destornillador', precio: 55},{nombre: 'destornillador', precio: 55}
  ,{nombre: 'destornillador', precio: 55},{nombre: 'destornillador', precio: 55},{nombre: 'Destornillador', precio: 55}]

  productosRes: any[] = [{nombre: 'destornillador', precio: 55}]

  constructor(private router: Router){

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

  seleccionarPV(seccion: string) {
    this.selectedPV = seccion;
  }

  cambioOpcionPV(parametro: string){
    this.garantiaPV= false
    this.serviciosPV= false
    this.contratoPV= false
    

    switch (parametro) {
      case 'garantiaPV': 
        this.garantiaPV = true
        break;
      case 'serviciosPV': 
        this.serviciosPV = true
        break;
      case 'contratoPV': 
        this.contratoPV = true
        break;
    }
  }

  actualizar(){

  }

  agendado(){
    alert('Turno agendado con exito. Numero de seguimiento: 1234')
  }

  consultado(){
    this.hizoConsulta = true
  }

  logout(){
    this.router.navigate([''])
  }

}
