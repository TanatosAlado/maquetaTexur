import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  modalDetalle: boolean = false
  mostrarCarro: boolean = false
  perfil: boolean = true
  compras: boolean = false
  postventa: boolean = false
  elearning: boolean = false
  mensajero: boolean = false
  garantiaPV: boolean = true
  serviciosPV: boolean = false
  contratoPV: boolean = false
  hizoConsulta: boolean = false
  seguimientoCurso: boolean = false
  indexProducto: number = 0
  modalCarrusel: boolean = false
  currentStep = 0;


  steps = [
    { name: 'Descripción', isDisabled: false },
    { name: 'Material', isDisabled: true },
    { name: 'Evaluación', isDisabled: true },
    { name: 'Encuesta', isDisabled: true }
  ];
  imagenesCarrusel = [
    { src: '../../../assets/Rally Pro.png', alt: 'Foto 1' },
    { src: '../../../assets/Icegard Oro.png', alt: 'Foto 2' },
    { src: '../../../assets/Icegard Rosso.png', alt: 'Foto 3' },
    { src: '../../../assets/Icegard Verde.png', alt: 'Foto 4' },
    { src: '../../../assets/Icegard Blu.png', alt: 'Foto 5' }
  ];

  selected: string = 'perfil'
  selectedPV: string = 'garantiaPV'
  productos: any[] = [{ nombre: 'Icegard Oro', precio: 55, imagenP: '../../../assets/Icegard Oro.png', descripcion: 'This service machine is the result of a 40-year journey merging experience, technical know-how and state-of-the-art solutions. There are two versions available, for R134a and for the latest R1234yf.', caracteristicas: '../../../assets/caracteristicasOro.png' }, { nombre: 'Rally Pro', precio: 55, imagenP: '../../../assets/Rally Pro.png', descripcion: 'This service machine is the result of a 40-year journey merging experience, technical know-how and state-of-the-art solutions. There are two versions available, for R134a and for the latest R1234yf.', caracteristicas: '../../../assets/caracteristicaRallyPro.png' }, { nombre: 'Icegard Verde', precio: 55, imagenP: '../../../assets/Icegard Verde.png', descripcion: 'This service machine is the result of a 40-year journey merging experience, technical know-how and state-of-the-art solutions. There are two versions available, for R134a and for the latest R1234yf.', caracteristicas: '../../../assets/caracteristicaVerde.png' }
    , { nombre: 'Icegard Blu', precio: 55, imagenP: '../../../assets/Icegard Blu.png', descripcion: 'This service machine is the result of a 40-year journey merging experience, technical know-how and state-of-the-art solutions. There are two versions available, for R134a and for the latest R1234yf.', caracteristicas: '../../../assets/caracteristicaBlu.png' }, { nombre: 'Icegard Rosso', precio: 55, imagenP: '../../../assets/Icegard Rosso.png', descripcion: 'This service machine is the result of a 40-year journey merging experience, technical know-how and state-of-the-art solutions. There are two versions available, for R134a and for the latest R1234yf.', caracteristicas: '../../../assets/caracteristicaRosso.png' }]

  productosRes: any[] = []

  mensajes: any[] = [{ asunto: 'Renovación de licencia', cuerpo: 'Se informa que el período de licencia está cercano a su fin', fecha: '20/05/2024', de: 'Distribuidor Oficial' },
  { asunto: 'Oferta en productos', cuerpo: 'Oferta semanal: 30% off en repuestos marca Agro', fecha: '27/05/2024', de: 'Distribuidor Oficial' },
  { asunto: 'Mantanimiento equipo XX', cuerpo: 'Se informa que el service deberá realizar en 30 días', fecha: '31/05/2024', de: 'Distribuidor Oficial' },
  ]

  materialLibre: any[] = [{ nombre: 'Instructivo puesta en marcha', descripcion: 'Paso a paso para poner en marcha equipos XX', duracion: '30 minutos', tipo: "../../../assets/pdf.png" },
  { nombre: 'Cambio aceite', descripcion: 'Guía paso a paso para cambiar aceite en equipos XX', duracion: '45 minutos', tipo: "../../../assets/pp.png" },
  { nombre: 'Limpieza fusor', descripcion: 'Video explicativo sobre limpieza de partes', duracion: '1 hora 30 minutos', tipo: "../../../assets/video.png" }]

  gestionActiva: boolean = false

  productoGestion: string = ''

  constructor(private router: Router) {

  }


  ngOnInit(): void {
    setTimeout(() => {
      this.modalCarrusel = true; // Muestra el modal después de 2 segundos
    }, 2000);
  }

  cerrarCarrusel(){
    this.modalCarrusel=false
  }


  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
      this.steps[this.currentStep].isDisabled = false;
    } else {
      this.finalizar();
    }
  }


  finalizar() {
    this.seguimientoCurso = false;
    this.currentStep = 0;
    this.seguimientoCurso = true;
    this.steps = [
      { name: 'Descripción', isDisabled: false },
      { name: 'Material', isDisabled: true },
      { name: 'Evaluación', isDisabled: true },
      { name: 'Encuesta', isDisabled: true }
    ];
    this.seguimientoCurso = false;
    alert('Curso finalizado exitosamente')
  }

  cambio(parametro: string) {
    this.perfil = false
    this.compras = false
    this.postventa = false
    this.elearning = false
    this.mensajero = false

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

  cambioOpcionPV(parametro: string) {
    this.garantiaPV = false
    this.serviciosPV = false
    this.contratoPV = false


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

  actualizar() {

  }

  agendado() {
    alert('Turno agendado con exito. Numero de seguimiento: 1234')
  }

  consultado() {
    this.hizoConsulta = true
  }

  logout() {
    this.router.navigate([''])
  }

  habilitarDemo() {
    this.seguimientoCurso = true
  }

  carritoOn() {
    this.mostrarCarro = true
  }

  carritoOff() {
    this.mostrarCarro = false
  }

  cargarProd(indice: number) {
    this.productosRes.push(this.productos[indice])
  }

  borrarProd(indice: number) {
    this.productosRes.splice(indice, 1)
  }

  mostrarDetalle(indice: number) {
    this.indexProducto = indice
    this.modalDetalle = true
  }

  cerrarDetalle() {
    this.modalDetalle = false
  }

  mostrarGestion(producto: string){
    this.productoGestion = producto
    this.gestionActiva = true
  }

  cerrarGestion(){
    this.productoGestion = ''
    this.gestionActiva = false
  }

}
