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
  hayProductos: boolean = false
  montoCompra: number = 0
  modalCursosLibres:boolean=false


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
  productos: any[] = [{ unidades: 1, nombre: 'Icegard Oro', precio: 1000, imagenP: '../../../assets/Icegard Oro.png', descripcion: 'This service machine is the result of a 40-year journey merging experience, technical know-how and state-of-the-art solutions. There are two versions available, for R134a and for the latest R1234yf.', caracteristicas: '../../../assets/caracteristicasOro.png' }, { unidades: 1, nombre: 'Rally Pro', precio: 1500, imagenP: '../../../assets/Rally Pro.png', descripcion: 'This service machine is the result of a 40-year journey merging experience, technical know-how and state-of-the-art solutions. There are two versions available, for R134a and for the latest R1234yf.', caracteristicas: '../../../assets/caracteristicaRallyPro.png' }, { unidades: 1, nombre: 'Icegard Verde', precio: 650, imagenP: '../../../assets/Icegard Verde.png', descripcion: 'This service machine is the result of a 40-year journey merging experience, technical know-how and state-of-the-art solutions. There are two versions available, for R134a and for the latest R1234yf.', caracteristicas: '../../../assets/caracteristicaVerde.png' }
    , { unidades: 1, nombre: 'Icegard Blu', precio: 800, imagenP: '../../../assets/Icegard Blu.png', descripcion: 'This service machine is the result of a 40-year journey merging experience, technical know-how and state-of-the-art solutions. There are two versions available, for R134a and for the latest R1234yf.', caracteristicas: '../../../assets/caracteristicaBlu.png' }, { unidades: 1, nombre: 'Icegard Rosso', precio: 550, imagenP: '../../../assets/Icegard Rosso.png', descripcion: 'This service machine is the result of a 40-year journey merging experience, technical know-how and state-of-the-art solutions. There are two versions available, for R134a and for the latest R1234yf.', caracteristicas: '../../../assets/caracteristicaRosso.png' }]

  productosRes: any[] = []

  mensajes: any[] = [{ asunto: 'Renovación de licencia', cuerpo: 'Se informa que el período de licencia está cercano a su fin', fecha: '20/05/2024', de: 'Distribuidor Oficial' },
  { asunto: 'Oferta en productos', cuerpo: 'Oferta semanal: 30% off en repuestos marca Agro', fecha: '27/05/2024', de: 'Distribuidor Oficial' },
  { asunto: 'Mantanimiento equipo XX', cuerpo: 'Se informa que el service deberá realizar en 30 días', fecha: '31/05/2024', de: 'Distribuidor Oficial' },
  ]

  materialLibre: any[] = [{ nombre: 'Instructivo puesta en marcha', descripcion: 'Paso a paso para poner en marcha equipos XX', duracion: '30 minutos', tipo: "../../../assets/pdf.png" },
  { nombre: 'Cambio aceite', descripcion: 'Guía paso a paso para cambiar aceite en equipos XX', duracion: '45 minutos', tipo: "../../../assets/pp.png" },
  { nombre: 'Limpieza fusor', descripcion: 'Video explicativo sobre limpieza de partes', duracion: '1 hora 30 minutos', tipo: "../../../assets/video.png" }]

  allCursos: any[] = [{nombre:"Funcionamiento Icegard Oro", descripcion: 'Funcionamiento, mantenimiento y servicios para equipo Icegard Oro', precio: 140, imagen:"../../../assets/Icegard Oro.png", estrellas: 4, imagenEstrellas: '../../../assets/4de5.png'}, 
    {nombre:"Funcionamiento Rally Pro", descripcion: 'Funcionamiento, mantenimiento y servicios para equipo Icegard Rally Pro', precio: 160, imagen:"../../../assets/Rally Pro.png", estrellas: 5, imagenEstrellas: '../../../assets/5de5.png'},
    {nombre:"Funcionamiento Icegard Blu", descripcion: 'Funcionamiento, mantenimiento y servicios para equipo Icegard Blu', precio: 140, imagen:"../../../assets/Icegard Blu.png", estrellas: 4, imagenEstrellas: '../../../assets/4de5.png'},
    {nombre:"Funcionamiento Icegard Rosso", descripcion: 'Funcionamiento, mantenimiento y servicios para equipo Icegard Rosso', precio: 140, imagen:"../../../assets/Icegard Rosso.png", estrellas: 3, imagenEstrellas: '../../../assets/3de5.png'},
    {nombre:"Funcionamiento Icegard Verde", descripcion: 'Funcionamiento, mantenimiento y servicios para equipo Icegard Verde', precio: 140, imagen:"../../../assets/Icegard Verde.png", estrellas: 3, imagenEstrellas: '../../../assets/3de5.png'}
  ]
  gestionActiva: boolean = false

  productoGestion: string = ''


  cursos: any[] = [];
  selectedStars: number | null = null;
  selectedPriceRange: [number, number] | null = null;



  constructor(private router: Router) {

  }


  ngOnInit(): void {
    this.cursos = [...this.allCursos];
    setTimeout(() => {
      this.modalCarrusel = true; 
    }, 2000);
  }

  cerrarCarrusel(){
    this.modalCarrusel=false
  }

  showCursosLibres(){
    this.modalCursosLibres=true
  }

  hideCursosLibres(){
    this.modalCursosLibres=false
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
    this.hayProductos = this.productosRes.length > 0
    this.mostrarCarro = true
  }

  carritoOff() {
    this.mostrarCarro = false
  }

  cargarProd(indice: number) {
    this.productosRes.push(this.productos[indice])
    this.hayProductos = this.productosRes.length > 0
    this.calcularMonto()
  }

  borrarProd(indice: number) {
    this.productosRes.splice(indice, 1)
    this.hayProductos = this.productosRes.length > 0
    this.calcularMonto()
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

  restar(indice: number){
    if(this.productosRes[indice].unidades > 1){
      this.productosRes[indice].unidades --
      this.calcularMonto()
    }
    
  }

  sumar(indice: number){
    this.productosRes[indice].unidades ++
    this.calcularMonto()
  }

  calcularMonto(){
    this.montoCompra = 0
    for(let i = 0; this.productosRes.length > i; i++){
      this.montoCompra = this.montoCompra + (this.productosRes[i].unidades * this.productosRes[i].precio)
    }
  }





  filtroE(stars: number) {
    this.selectedStars = stars;
    this.applyFilters();
  }

  filtroP(price: number) {
    if (price === 50) {
      this.selectedPriceRange = [1, 50];
    } else if (price === 150) {
      this.selectedPriceRange = [51, 100];
    } else if (price === 300) {
      this.selectedPriceRange = [101, 300];
    } else if (price === 301) {
      this.selectedPriceRange = [301, 999];
    } else {
      this.selectedPriceRange = null;
    }
    this.applyFilters();
  }

  buscarCurso(cadena: string){
    this.limpiarFiltros()
    this.cursos = this.allCursos.filter(curso => 
      curso.nombre.includes(cadena)
    )
  }

  applyFilters() {
    this.cursos = this.allCursos.filter(curso => {
      let matchesStars = true;
      let matchesPrice = true;

      if (this.selectedStars !== null) {
        matchesStars = curso.estrellas === this.selectedStars;
      }

      if (this.selectedPriceRange !== null) {
        matchesPrice = curso.precio >= this.selectedPriceRange[0] && curso.precio <= this.selectedPriceRange[1];
      }

      return matchesStars && matchesPrice;
    });
  }

  limpiarFiltros() {
    this.selectedStars = null;
    this.selectedPriceRange = null;
    this.cursos = [...this.allCursos];
    (document.querySelectorAll('input[type=radio]') as NodeListOf<HTMLInputElement>).forEach(input => input.checked = false);
    // Limpiar selección de radios
    //(document.querySelectorAll('input[type=radio]') asNodeListOf<HTMLInputElement>).forEach(input => input.checked = false);
  }


}
