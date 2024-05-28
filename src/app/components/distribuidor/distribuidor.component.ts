import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-distribuidor',
  templateUrl: './distribuidor.component.html',
  styleUrls: ['./distribuidor.component.css']
})
export class DistribuidorComponent {
  perfilDistribuidor=true
  gestioncliente: boolean = false
  postVenta: boolean = false
  eLearning: boolean = false
  marketing: boolean = false
  compras: boolean = false
  ventas: boolean = false
  analisisDatos: boolean = false
  suscripciones: boolean = false
  detallesDistribuidor:Boolean=false
  selected: string = 'perfilDistribuidor'
  arrayClientes: any[] = [{nombre: 'Juan', apellido:'Perez', cuit: '11-111111111-1',telefono:123456789},{nombre: 'Manuel', apellido:'Gomez', cuit: '22-111111111-2',telefono:987654321},{nombre: 'Mauro', apellido:'Garcia', cuit: '33-111111111-3',telefono:789789788},{nombre: 'Alberto', apellido:'Sanchez', cuit: '44-111111111-4',telefono:478885547},]

  constructor(private router: Router){

  }

  cambio(parametro: string){
    this.perfilDistribuidor=false
    this.gestioncliente= false
    this.postVenta= false
    this.eLearning= false
    this.marketing= false
    this.compras= false
    this.ventas= false
    this.analisisDatos= false
    this.suscripciones= false


    switch (parametro) {
      case 'perfilDistribuidor': 
      this.perfilDistribuidor = true
      this.detallesDistribuidor=false
      break;
      case 'gestionCliente': 
        this.gestioncliente = true
        this.detallesDistribuidor=false
        break;
      case 'postVenta': 
        this.postVenta = true
        break;
      case 'eLearning': 
        this.eLearning = true
        break;
      case 'marketing': 
        this.marketing = true
        break;
      case 'compras': 
        this.compras= true
        break;
        case 'ventas': 
        this.ventas= true
        break;
        case 'analisdeDatos': 
        this.analisisDatos= true
        break;
        case 'suscripciones': 
        this.suscripciones= true
        break;
    }
  }
  seleccionar(seccion: string) {
    this.selected = seccion;
  }
  
  actualizar(){

  }
  mostrarDetalle(){
this.gestioncliente=false
this.detallesDistribuidor=true
  }

  borrarCliente(){
   alert("Cliente borrado con éxito")
      this.router.navigate(['distribuidor'])

  }
}
