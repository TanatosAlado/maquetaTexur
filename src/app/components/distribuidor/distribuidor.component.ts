import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-distribuidor',
  templateUrl: './distribuidor.component.html',
  styleUrls: ['./distribuidor.component.css']
})
export class DistribuidorComponent {

  perfilDistribuidor = true
  gestioncliente: boolean = false
  postVenta: boolean = false
  eLearning: boolean = false
  marketing: boolean = false
  compras: boolean = false
  ventas: boolean = false
  analisisDatos: boolean = false
  suscripciones: boolean = false
  detallesDistribuidor: boolean = false
  compartirCurso: boolean = false
  selected: string = 'perfilDistribuidor'
  selectedPV: string = 'garantiasPV'
  selectedVenta: string = 'ventaCliente'
  selectedMK: string = 'campanasMK'
  selectedCompra: string = 'proveedoresCompra'
  arrayClientes: any[] = [{ nombre: 'Juan', apellido: 'Perez', cuit: '11-111111111-1', telefono: 123456789, nivel: 'Nivel 0' }, { nombre: 'Manuel', apellido: 'Gomez', cuit: '22-111111111-2', telefono: 987654321, nivel: 'Nivel 1' }, { nombre: 'Mauro', apellido: 'Garcia', cuit: '33-111111111-3', telefono: 789789788, nivel: 'Nivel 0' }, { nombre: 'Alberto', apellido: 'Sanchez', cuit: '44-111111111-4', telefono: 478885547, nivel: 'Nivel 2' },]
  arrayCursos: any[] = [{ nombrecurso: 'Curso 1', tipo: '../../../assets/video.png', duracion: '40 hs' }, { nombrecurso: 'Curso 2', tipo: '../../../assets/pdf.png', duracion: '5 hs' }, { nombrecurso: 'Curso 3', tipo: '../../../assets/pp.png', duracion: '16 hs' }, { nombrecurso: 'Curso 4', tipo: '../../../assets/video.png', duracion: '8 hs' }]
  prodAdquiridos: any[] = [{ fecha: '09/09/2021', producto: 'Tester hidráulico', garantia: 'No' }, { fecha: '03/10/2022', producto: 'Sopladora', garantia: 'No' }, { fecha: '09/01/2024', producto: 'Extractor', garantia: 'Si' }]
  garantiasVendidas: any[] = [{ ngarantia: '364', producto: 'Sellador térmico', cliente: 'Taller Paraná', desde: '03/05/2022', hasta: '03/06/2023', condicion: 'Realizar service', cobertura: 'Defectos en fabricación' },
  { ngarantia: '385', producto: 'Extensor', cliente: 'Taller Polirubro', desde: '04/08/2022', hasta: '04/08/2023', condicion: 'Cambio de carbones', cobertura: 'Defectos en fabricación' },
  { ngarantia: '694', producto: 'Restablecedor señal', cliente: 'Service Haroldos', desde: '03/09/2023', hasta: '03/09/2024', condicion: 'Reubicación', cobertura: 'Defectos en fabricación' }]
  arrayPagos: any = [{ nroFactura: '13257498', fecha: '14/05/2021', proveedor: 'Taller Sanchez', monto: '$145874' }, { nroFactura: '8585744', fecha: '21/07/2022', proveedor: 'Taller Perez', monto: '$205878' }, { nroFactura: '1325487', fecha: '30/01/2023', proveedor: 'Taller Gutierrez', monto: '$587471' }, { nroFactura: '3698585', fecha: '08/04/2020', proveedor: 'Taller García', monto: '$25874' },]
  serviceAgenda: any[] = [{ fecha: '30/05/2024', tipo: 'Mantenimiento', cliente: 'Taller Galicia', estado: 'En Ejecución', tecnico: 'Carlos', recursos: 'En Stock' }, { fecha: '01/06/2024', tipo: 'Reparación', cliente: 'Taller privado', estado: 'En Espera', tecnico: 'Carlos', recursos: 'En Stock' }, { fecha: '7/6/2024', tipo: 'Mantenimiento', cliente: 'Taller MetroFe', estado: 'En Espera', tecnico: 'Carlos', recursos: 'Gestionados' }, { fecha: '3/06/2024', tipo: 'Mantenimiento', cliente: 'Taller Lopez', estado: 'En Espera', tecnico: 'Carlos', recursos: 'Gestionados' }]
  listaRepuestos: any[] = [{ codigo: 'ar488', descripcion: 'Bobina XX', fabricante: 'Compañia Virtus', stock: '12' }, { codigo: 'ar490', descripcion: 'Contra bobina XX', fabricante: 'Compañia Virtus', stock: '12' }, { codigo: 'ag635', descripcion: 'Zonda XX', fabricante: 'Magallanes SRL', stock: '6' }]
  instructivos: any[] = [{ titulo: 'Desarme frente maquina XX', descripcion: 'Paso a paso del desarme con fotos', tipo: '../../../assets/pdf.png' }, { titulo: 'Desarme frente maquina XX', descripcion: 'Paso a paso del desarme con fotos', tipo: '../../../assets/pdf.png' }, { titulo: 'Desarme frente maquina XX', descripcion: 'Paso a paso del desarme con fotos', tipo: '../../../assets/pdf.png' }]
  faqListado: any[] = [{ pregunta: 'Puedo extender mi suscrpción?', respuesta: 'Las suscripciones pueden extenderse y  pueden cambiar el tipo de membresía' }, { pregunta: 'No puedo ver el material de E-Learning', respuesta: 'Los contenidos se retiran cuando el cliente no renovo su membresía' }, { pregunta: 'Como reservo un servicio', respuesta: 'En la sección Post Venta, apartado #Servicios, se puede generar la solicitud' }, { pregunta: 'Donde encuentro la garantía de mi producto?', respuesta: 'Puede consultar la garantía de un producto en la sección Post Venta, apartado Garantía y seleccionando el producto deseado.' }]
  arrayProveedores: any = [{ codigo: 14568, razon: 'Taller Perez', telefono: '1111111111', cuit: '11-111111111-1' }, { codigo: 47898, razon: 'Taller Gomez', telefono: '2222222222', cuit: '22-111111111-2' }, { codigo: 25478, razon: 'Taller Sanchez', telefono: '3333333333', cuit: '33-111111111-3' }, { codigo: 19872, razon: 'Taller Ortega', telefono: '4444444444', cuit: '44-111111111-4' }]
  arrayPedidos: any = [{ codigo: '36589', nombre: 'Bujias', cantidad: '45', precio: '$45874', entrega: 'Retiro', cliente: 'Taller Sanchez' }, { codigo: '14587', nombre: 'Sondas', cantidad: '30', precio: '$75894', entrega: 'Retiro', cliente: 'Taller Perez' }, { codigo: '33699', nombre: 'Aceites', cantidad: '4', precio: '$12125', entrega: 'Envio', cliente: 'Taller Gomez' }, { codigo: '59874', nombre: 'Correas', cantidad: '10', precio: '$25478', entrega: 'Retiro', cliente: 'Taller Garcia' }]
  arrayAnalisisVentas: any = [{ codProducto: '455454', nombreProducto: 'Bujia', vtaMensual: 6, vtaSemestral: 65, vtaAnual: 8, totalFacturacion: '$145875' }, { codProducto: '878848', nombreProducto: 'Aceite', vtaMensual: 7, vtaSemestral: 14, vtaAnual: 3, totalFacturacion: '$9875' }, { codProducto: '11254', nombreProducto: 'Correas', vtaMensual: 47, vtaSemestral: 98, vtaAnual: 10, totalFacturacion: '$58747' }, { codProducto: '121245', nombreProducto: 'Poleas', vtaMensual: 20, vtaSemestral: 6, vtaAnual: 47, totalFacturacion: '$785874' }, { codProducto: '125444', nombreProducto: 'Placa', vtaMensual: 10, vtaSemestral: 49, vtaAnual: 61, totalFacturacion: '$398585' }]
  arrayFacturas: any = [{ nroFactura: '12646', cliente: 'Taller Sanchez', monto: '$14587', tipoFactura: 'Exento Iva' }, { nroFactura: '12646', cliente: 'Taller Sanchez', monto: '$14587', tipoFactura: 'Exento Iva' }, { nroFactura: '12646', cliente: 'Taller Sanchez', monto: '$14587', tipoFactura: 'Exento Iva' }, { nroFactura: '12646', cliente: 'Taller Sanchez', monto: '$14587', tipoFactura: 'Exento Iva', }]
  campanasLista: any[] = [{ titulo: 'Renovación anticipada', descripcion: 'Renovación de membresía anticipada con 15% de descuento', aplica: 'Membresia nivel 2' }, { titulo: 'Ofertas Salenko', descripcion: 'Descuento de 20% en repuestos marca Salenko', aplica: 'Todos' }]
  leadsLista: any[] = [{ nombre: 'Rogelio Water', origen: 'RRSS', objetivo: 'Incorporación a clientes' }, { nombre: 'Jonnhy Cash', origen: 'RRSS', objetivo: 'Incorporación a clientes' }, { nombre: 'Mariano Mastrangelo', origen: 'RRSS', objetivo: 'Venta inmediata' }, { nombre: 'Taller Refugio', origen: 'Campaña', objetivo: 'Incorporación a clientes' }, { nombre: 'Taller Marijuan', origen: 'Campaña', objetivo: 'Incorporación a clientes' }]

  detallar: boolean = false
  detallesVentasClientes: boolean = false
  detalleSuscripciones: boolean = false
  seguimientoEnvio: boolean = false
  currentStep = 0;

  steps = [
    { name: 'Pendiente', isDisabled: false },
    { name: 'En Curso', isDisabled: true },
    { name: 'En Transporte', isDisabled: true },
    { name: 'Entregado', isDisabled: true }
  ];


  garantiasPV: boolean = true
  serviciosPV: boolean = false
  repuestosPV: boolean = false
  informacionPV: boolean = false
  contratosPV: boolean = false
  analisisPV: boolean = false
  proveedoresCompra: boolean = false
  pedidosCompra: boolean = false
  inventarioCompra: boolean = false
  pagosCompra: boolean = false
  graficoProveedor: boolean = false
  pedidosProveedor: boolean = false
  comprasProveedor: Boolean = false
  ventaCliente: boolean = false
  ventaSuscripciones: boolean = false
  ventaPedidos: boolean = false
  ventaFacturas: boolean = false
  ventaAnalisis: boolean = false
  analisisGraficos: boolean = false


  campanasMK: boolean = true
  leadsMK: boolean = false
  contactosMK: boolean = false
  analisisMK: boolean = false
  automatizacionMK: boolean = false




  constructor(private router: Router) {

  }

  cambioVenta(parametro: string) {
    this.ventaCliente = false
    this.ventaSuscripciones = false
    this.ventaPedidos = false
    this.ventaFacturas = false
    this.ventaAnalisis = false


    switch (parametro) {
      case 'ventaCliente':
        this.ventaCliente = true
        break;
      case 'ventaSuscripciones':
        this.ventaSuscripciones = true
        break;
      case 'ventaPedidos':
        this.ventaPedidos = true
        break;
      case 'ventaFacturas':
        this.ventaFacturas = true
        break;
      case 'ventaAnalisis':
        this.ventaAnalisis = true
        break;
    }
  }

  cambioPV(parametro: string) {
    this.garantiasPV = false
    this.serviciosPV = false
    this.repuestosPV = false
    this.informacionPV = false
    this.contratosPV = false
    this.analisisPV = false

    switch (parametro) {
      case 'garantiasPV':
        this.garantiasPV = true
        this.detallar = false
        break;
      case 'serviciosPV':
        this.serviciosPV = true
        break;
      case 'repuestosPV':
        this.repuestosPV = true
        break;
      case 'informacionPV':
        this.informacionPV = true
        break;
      case 'contratosPV':
        this.contratosPV = true
        break;
      case 'analisisPV':
        this.analisisPV = true
        break;
    }
  }

  cambioCompra(parametro: string) {
    this.proveedoresCompra = false
    this.pedidosCompra = false
    this.inventarioCompra = false
    this.pagosCompra = false


    switch (parametro) {
      case 'proveedoresCompra':
        this.proveedoresCompra = true
        this.pedidosCompra = false
        this.inventarioCompra = false
        this.pagosCompra = false
        break;
      case 'pedidosCompra':
        this.proveedoresCompra = false
        this.pedidosCompra = true
        this.inventarioCompra = false
        this.pagosCompra = false
        break;
      case 'inventarioCompra':
        this.proveedoresCompra = false
        this.pedidosCompra = false
        this.inventarioCompra = true
        this.pagosCompra = false
        break;
      case 'pagosCompra':
        this.proveedoresCompra = false
        this.pedidosCompra = false
        this.inventarioCompra = false
        this.pagosCompra = true
        break;
    }
  }

  cambioMK(parametro: string) {
    this.campanasMK = false
    this.leadsMK = false
    this.contactosMK = false
    this.analisisMK = false
    this.automatizacionMK = false

    switch (parametro) {
      case 'campanasMK':
        this.campanasMK = true
        break;
      case 'leadsMK':
        this.leadsMK = true
        break;
      case 'contactosMK':
        this.contactosMK = true
        break;
      case 'analisisMK':
        this.analisisMK = true
        break;
      case 'automatizacionMK':
        this.automatizacionMK = true
        break;
    }
  }



  cambio(parametro: string) {
    this.perfilDistribuidor = false
    this.gestioncliente = false
    this.postVenta = false
    this.eLearning = false
    this.marketing = false
    this.compras = false
    this.ventas = false
    this.analisisDatos = false
    this.suscripciones = false



    switch (parametro) {
      case 'perfilDistribuidor':
        this.perfilDistribuidor = true
        this.detallesDistribuidor = false
        this.proveedoresCompra = false
        this.compartirCurso = false
        this.pedidosCompra = false
        this.pagosCompra = false
        this.graficoProveedor = false
        this.ventaPedidos = false
        this.inventarioCompra = false
        this.ventaCliente = false
        this.ventaSuscripciones = false
        this.detalleSuscripciones = false
        this.seguimientoEnvio = false
        this.ventaFacturas = false
        this.ventaAnalisis = false
        this.analisisGraficos = false
        break;
      case 'gestionCliente':
        this.gestioncliente = true
        this.detallesDistribuidor = false
        this.proveedoresCompra = false
        this.compartirCurso = false
        this.pedidosCompra = false
        this.pagosCompra = false
        this.graficoProveedor = false
        this.inventarioCompra = false
        this.ventaCliente = false
        this.ventaSuscripciones = false
        this.detalleSuscripciones = false
        this.seguimientoEnvio = false
        this.ventaFacturas = false
        this.ventaAnalisis = false
        this.analisisGraficos = false
        break;
      case 'postVenta':
        this.postVenta = true
        this.proveedoresCompra = false
        this.compartirCurso = false
        this.detallar = false
        this.pedidosCompra = false
        this.pagosCompra = false
        this.graficoProveedor = false
        this.inventarioCompra = false
        this.ventaCliente = false
        this.ventaSuscripciones = false
        this.detalleSuscripciones = false
        this.seguimientoEnvio = false
        this.ventaFacturas = false
        this.ventaAnalisis = false
        this.analisisGraficos = false
        break;
      case 'eLearning':
        this.eLearning = true
        this.proveedoresCompra = false
        this.compartirCurso = false
        this.pedidosCompra = false
        this.pagosCompra = false
        this.graficoProveedor = false
        this.inventarioCompra = false
        this.ventaCliente = false
        this.ventaSuscripciones = false
        this.detalleSuscripciones = false
        this.seguimientoEnvio = false
        this.ventaFacturas = false
        this.ventaAnalisis = false
        this.analisisGraficos = false
        break;
      case 'marketing':
        this.marketing = true
        this.proveedoresCompra = false
        this.compartirCurso = false
        this.pedidosCompra = false
        this.pagosCompra = false
        this.inventarioCompra = false
        this.graficoProveedor = false
        this.ventaCliente = false
        this.ventaSuscripciones = false
        this.detalleSuscripciones = false
        this.seguimientoEnvio = false
        this.ventaFacturas = false
        this.ventaAnalisis = false
        this.analisisGraficos = false
        break;
      case 'compras':
        this.compras = true
        this.proveedoresCompra = true
        this.compartirCurso = false
        this.pedidosCompra = false
        this.pagosCompra = false
        this.inventarioCompra = false
        this.graficoProveedor = false
        this.ventaCliente = false
        this.ventaSuscripciones = false
        this.detalleSuscripciones = false
        this.seguimientoEnvio = false
        this.ventaFacturas = false
        this.ventaAnalisis = false
        this.analisisGraficos = false
        break;
      case 'ventas':
        this.ventas = true
        this.proveedoresCompra = false
        this.compartirCurso = false
        this.pedidosCompra = false
        this.pagosCompra = false
        this.ventaCliente = true
        this.graficoProveedor = false
        this.inventarioCompra = false
        this.ventaSuscripciones = false
        this.detalleSuscripciones = false
        this.seguimientoEnvio = false
        this.ventaFacturas = false
        this.ventaAnalisis = false
        this.analisisGraficos = false
        break;
      case 'analisisdeDatos':
        this.analisisDatos = true
        this.ventaCliente = false
        this.proveedoresCompra = false
        this.compartirCurso = false
        this.pedidosCompra = false
        this.pagosCompra = false
        this.inventarioCompra = false
        this.graficoProveedor = false
        this.ventaSuscripciones = false
        this.detalleSuscripciones = false
        this.seguimientoEnvio = false
        this.ventaFacturas = false
        this.ventaAnalisis = false
        this.analisisGraficos = false
        break;
      case 'suscripciones':
        this.suscripciones = true
        this.ventaCliente = false
        this.proveedoresCompra = false
        this.compartirCurso = false
        this.pedidosCompra = false
        this.pagosCompra = false
        this.graficoProveedor = false
        this.inventarioCompra = false
        this.ventaSuscripciones = false
        this.detalleSuscripciones = false
        this.seguimientoEnvio = false
        this.ventaFacturas = false
        this.ventaAnalisis = false
        this.analisisGraficos = false
        break;
    }
  }
  seleccionar(seccion: string) {
    this.selected = seccion;
  }

  seleccionarPV(seccion: string) {
    this.selectedPV = seccion;
  }

  seleccionarMK(seccion: string) {
    this.selectedMK = seccion;
  }

  seleccionarCompra(seccion: string) {
    this.selectedCompra = seccion;
  }

  seleccionarVenta(seccion: string) {
    this.selectedVenta = seccion;
  }

  actualizar() {

  }
  mostrarDetalle() {
    // this.gestioncliente=false
    this.detallesDistribuidor = true
  }

  borrarCliente() {
    alert("Cliente borrado con éxito")
    this.router.navigate(['distribuidor'])
  }
  borrarCurso() {
    alert("Curso borrado con éxito")
    this.router.navigate(['distribuidor'])
  }

  asignarcurso() {
    this.eLearning = false
    this.compartirCurso = true
  }

  cursoAsignado() {
    alert("Curso asignado con éxito")
    this.router.navigate(['distribuidor'])
  }

  logout() {
    this.router.navigate([''])
  }

  borrarGarantia() {
    alert('La garantía se borró exitosamente')
  }

  detallarGar() {
    this.detallar = true
  }

  closeDetallarGar() {
    this.detallar = false
  }

  mensajeGar() {
    alert('Mensaje enviado con exito')
    this.detallar = false
  }

  mensajeCurso() {
    alert('Curso asignado con éxito')
    this.detallar = false
  }

  borrarProveedor() {
    alert('Proveedor borrado con éxito')
    this.detallar = false
  }

  borrarPedido() {
    alert('Pedido borrado con éxito')
    this.detallar = false
  }
  borrarProducto() {
    alert('Producto borrado con éxito')
    this.detallar = false
  }

  borrarPagos() {
    alert('Pago borrado con éxito')
    this.detallar = false
  }

  borrarAnalisis() {
    alert('Analisis borrado con éxito')
    this.detallar = false
  }

  mostrarGraficoProveedor() {
    this.graficoProveedor = true
  }

  mostrarDetalleVenta() {
    this.detallesVentasClientes = true
  }

  mostrarDetalleSuscripciones() {
    this.detalleSuscripciones = true
  }

  mostrarAnalisisVentas() {
    this.analisisGraficos = true
  }


  finalizar() {
    this.seguimientoEnvio = false;
    this.currentStep = 0;
    this.seguimientoEnvio = true;
    this.steps = [
      { name: 'Descripción', isDisabled: false },
      { name: 'Material', isDisabled: true },
      { name: 'Evaluación', isDisabled: true },
      { name: 'Encuesta', isDisabled: true }
    ];
    this.seguimientoEnvio = false;
    alert('Pedido Entregado exitosamente')
  }

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
      this.steps[this.currentStep].isDisabled = false;
    } else {
      this.finalizar();
    }
  }
  habilitarDemo() {
    this.seguimientoEnvio = true
  }
}
