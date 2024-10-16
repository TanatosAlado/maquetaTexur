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
  agregarCliente:boolean=false
  suscripciones: boolean = false
  detallesDistribuidor: boolean = false
  compartirCurso: boolean = false
  contratoPV: boolean = false
  hizoConsulta:boolean=false
  garantiaPV:boolean=false
  almacenamientoDatos: boolean = true
  analisisDeDatos: boolean = false
  selected: string = 'perfilDistribuidor'
  selectedPV: string = 'garantiasPV'
  selectedVenta: string = 'ventaCliente'
  selectedMK: string = 'campanasMK'
  modalInformacion:boolean=false
  cargaDocumentacion:boolean=false
  selectOptionTablaOtros:string=''
  selectedCompra: string = 'proveedoresCompra'
  selectedAnalisis: string ='almacenamiento'
  arrarPostVentaOtros:any[]=[{codeTexur:"TEX-0017874",code:"R730102545",descripcion:"77h4 ICEGARD ORO LOGIC BOARD",version:"R134a"},{codeTexur:"TEX-0017899",code:"R730102345",descripcion:"ICEGARD ORO LOGIC BOARD FRONT PANEL",version:"R123yf"},{codeTexur:"TEX-0017875",code:"R716102580",descripcion:"POE OIL EV GROUP",version:"m12-1/4"},{codeTexur:"TEX-1299874",code:"R73010000",descripcion:"RED HP FILING HOSE 3000 MM",version:"R13pu"}]
  arrayClientes: any[] = [{ nombre: 'Juan', apellido: 'Perez', cuit: '11-111111111-1', telefono: 123456789, nivel: 'Nivel 0' }, { nombre: 'Manuel', apellido: 'Gomez', cuit: '22-111111111-2', telefono: 987654321, nivel: 'Nivel 1' }, { nombre: 'Mauro', apellido: 'Garcia', cuit: '33-111111111-3', telefono: 789789788, nivel: 'Nivel 0' }, { nombre: 'Alberto', apellido: 'Sanchez', cuit: '44-111111111-4', telefono: 478885547, nivel: 'Nivel 2' },]
  arrayCursos: any[] = [{ nombrecurso: 'Curso 1', tipo: '../../../assets/video.png', duracion: '40 hs' }, { nombrecurso: 'Curso 2', tipo: '../../../assets/pdf.png', duracion: '5 hs' }, { nombrecurso: 'Curso 3', tipo: '../../../assets/pp.png', duracion: '16 hs' }, { nombrecurso: 'Curso 4', tipo: '../../../assets/video.png', duracion: '8 hs' }]
  prodAdquiridos: any[] = [{ fecha: '09/09/2021', producto: 'Tester hidráulico', garantia: 'No' }, { fecha: '03/10/2022', producto: 'Sopladora', garantia: 'No' }, { fecha: '09/01/2024', producto: 'Extractor', garantia: 'Si' }]
  garantiasVendidas: any[] = [{ ngarantia: '364', producto: 'Sellador térmico', cliente: 'Taller Paraná', desde: '03/05/2022', hasta: '03/06/2023', condicion: 'Realizar service', cobertura: 'Defectos en fabricación' },
  { ngarantia: '385', producto: 'Extensor', cliente: 'Taller Polirubro', desde: '04/08/2022', hasta: '04/08/2023', condicion: 'Cambio de carbones', cobertura: 'Defectos en fabricación' },
  { ngarantia: '694', producto: 'Restablecedor señal', cliente: 'Service Haroldos', desde: '03/09/2023', hasta: '03/09/2024', condicion: 'Reubicación', cobertura: 'Defectos en fabricación' }]
  arrayPagos: any = [{ nroFactura: '13257498', fecha: '14/05/2021', proveedor: 'Taller Sanchez', monto: '$145874' }, { nroFactura: '8585744', fecha: '21/07/2022', proveedor: 'Taller Perez', monto: '$205878' }, { nroFactura: '1325487', fecha: '30/01/2023', proveedor: 'Taller Gutierrez', monto: '$587471' }, { nroFactura: '3698585', fecha: '08/04/2020', proveedor: 'Taller García', monto: '$25874' },]
  serviceAgenda: any[] = [{ fecha: '30/05/2024', tipo: 'Mantenimiento', cliente: 'Taller Galicia', estado: 'En Ejecución', tecnico: 'Carlos', recursos: 'En Stock' }, { fecha: '01/06/2024', tipo: 'Reparación', cliente: 'Taller privado', estado: 'En Espera', tecnico: 'Carlos', recursos: 'En Stock' }, { fecha: '7/6/2024', tipo: 'Mantenimiento', cliente: 'Taller MetroFe', estado: 'En Espera', tecnico: 'Carlos', recursos: 'Gestionados' }, { fecha: '3/06/2024', tipo: 'Mantenimiento', cliente: 'Taller Lopez', estado: 'En Espera', tecnico: 'Carlos', recursos: 'Gestionados' }]
  listaRepuestos: any[] = [{ codigo: 'ar488', descripcion: 'Bobina XX', categoria:"ICEGARD ORO Full Metal", fabricante: 'Compañia Virtus', stock: '12' }, { codigo: 'ar490', descripcion: 'Contra bobina XX',categoria:"ICEGARD AGRO", fabricante: 'Compañia Virtus', stock: '12' }, { codigo: 'ag635', descripcion: 'Zonda XX',categoria:"Otros", fabricante: 'Magallanes SRL', stock: '6' }]
  instructivos: any[] = [{ titulo: 'Desarme frente maquina ICEGARD v 2.0', descripcion: 'Paso a paso del desarme con fotos explicativos del modelo ICEGARD, el tutorial incluye ademas un video explicativo', tipo: '../../../assets/pdf.png' }, { titulo: 'Tutorial Cambio Valvulas Compresor', descripcion: 'Paso a paso del cambio de las valvulas principales del compresor para lograr un mejor afinamiento', tipo: '../../../assets/pdf.png' }, { titulo: 'Motor a combustión', descripcion: 'Paso a paso del desarme con fotos y videos del motro a combustion, tambien se incluye un video para la puesta a punto', tipo: '../../../assets/pdf.png' }]
  arrayProveedores: any = [{ codigo: 14568, razon: 'Taller Perez', telefono: '1111111111', cuit: '11-111111111-1' }, { codigo: 47898, razon: 'Taller Gomez', telefono: '2222222222', cuit: '22-111111111-2' }, { codigo: 25478, razon: 'Taller Sanchez', telefono: '3333333333', cuit: '33-111111111-3' }, { codigo: 19872, razon: 'Taller Ortega', telefono: '4444444444', cuit: '44-111111111-4' }]
  arrayPedidos: any = [{ codigo: '36589', nombre: 'Bujias', cantidad: '45', precio: '$45874', entrega: 'Retiro', cliente: 'Taller Sanchez' }, { codigo: '14587', nombre: 'Sondas', cantidad: '30', precio: '$75894', entrega: 'Retiro', cliente: 'Taller Perez' }, { codigo: '33699', nombre: 'Aceites', cantidad: '4', precio: '$12125', entrega: 'Envio', cliente: 'Taller Gomez' }, { codigo: '59874', nombre: 'Correas', cantidad: '10', precio: '$25478', entrega: 'Retiro', cliente: 'Taller Garcia' }]
  arrayAnalisisVentas: any = [{ codProducto: '455454', nombreProducto: 'Bujia', vtaMensual: 6, vtaSemestral: 65, vtaAnual: 8, totalFacturacion: '$145875' }, { codProducto: '878848', nombreProducto: 'Aceite', vtaMensual: 7, vtaSemestral: 14, vtaAnual: 3, totalFacturacion: '$9875' }, { codProducto: '11254', nombreProducto: 'Correas', vtaMensual: 47, vtaSemestral: 98, vtaAnual: 10, totalFacturacion: '$58747' }, { codProducto: '121245', nombreProducto: 'Poleas', vtaMensual: 20, vtaSemestral: 6, vtaAnual: 47, totalFacturacion: '$785874' }, { codProducto: '125444', nombreProducto: 'Placa', vtaMensual: 10, vtaSemestral: 49, vtaAnual: 61, totalFacturacion: '$398585' }]
  arrayFacturas: any = [{ nroFactura: '12646', cliente: 'Taller Sanchez', monto: '$14587', tipoFactura: 'Exento Iva' }, { nroFactura: '12646', cliente: 'Taller Sanchez', monto: '$14587', tipoFactura: 'Exento Iva' }, { nroFactura: '12646', cliente: 'Taller Sanchez', monto: '$14587', tipoFactura: 'Exento Iva' }, { nroFactura: '12646', cliente: 'Taller Sanchez', monto: '$14587', tipoFactura: 'Exento Iva', }]
  campanasLista: any[] = [{ titulo: 'Renovación anticipada', descripcion: 'Renovación de membresía anticipada con 15% de descuento', aplica: 'Membresia nivel 2', tipo: 'Campaña por mail', objetivo: 'Aumentar el numero de renovaciones', presupuesto: '$25000', fecha: '15-09-2024' }, { titulo: 'Ofertas ISC', descripcion: 'Descuento de 20% en repuestos marca ISC', aplica: 'Todos', tipo: 'Campaña por RRSS', objetivo: 'Aumento puntual de venta', presupuesto: '$15000', fecha: '01-10-2024' }]
  leadsLista: any[] = [{ nombre: 'Rogelio Water', origen: 'RRSS', objetivo: 'Incorporación a clientes' }, { nombre: 'Jonnhy Cash', origen: 'RRSS', objetivo: 'Incorporación a clientes' }, { nombre: 'Mariano Mastrangelo', origen: 'RRSS', objetivo: 'Venta inmediata' }, { nombre: 'Taller Refugio', origen: 'Campaña', objetivo: 'Incorporación a clientes' }, { nombre: 'Taller Marijuan', origen: 'Campaña', objetivo: 'Incorporación a clientes' }]
  contratosListado: any[] = [{numero: '3465', cliente: 'Taller Federal', condicion: 'Cumplimiento de 3 service', precio: 'U$S 250', fecha:'30/06/2024'},{numero: '2385', cliente: 'Taller Continental', condicion: 'Cumplimiento de 3 service + mantenimiento', precio: 'U$S 450', fecha:'07/06/2025'}]
  automatizacionLista: any[] = [{nombre: 'Amigos referidos', descripcion: 'Traé un amigo y llevate 40% off en proximo service', fecha: '15/06/2024'},{nombre: 'Beneficio Sumatra', descripcion: '15% descuento en repuestos marca Sumatra', fecha: '21/06/2024'}]
  arraySuscripciones:any[]=[{nivel:'Nivel 0',beneficios:'Manuales mantenimeinto maquinas, contenido multimedia',costo:'Sin Costo'},{nivel:'Nivel 1',beneficios:'Diagramas vehículos, procedimientos customizados, generación de reportes por vehículos',costo:'$ 308545'},{nivel:'Nivel 1',beneficios:'Acceso Módulo Elearning, acceso a foro consultas',costo:'$ 587478'}]

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
  modalCursosLibres:boolean=false
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
  fichaSuscripcion:boolean=false
  gestionActiva:boolean=false
  campanasMK: boolean = true
  tablaPostVentaOtros:boolean=true
  leadsMK: boolean = false
  contactosMK: boolean = false
  agregarCurso:boolean=false
  cargaFaq:boolean=false
  analisisMK: boolean = false
  automatizacionMK: boolean = false
  selectedStars: number | null = null;
  selectedPriceRange: [number, number] | null = null;
  modalCarrusel: boolean = false
  cursos: any[] = [];
  productoGestion: string = ''
  tituloInformacion:string=''
  descripcionInformacion:string=''
  materialLibre: any[] = [{ nombre: 'Instructivo puesta en marcha', descripcion: 'Paso a paso para poner en marcha equipos XX', duracion: '30 minutos', tipo: "../../../assets/pdf.png" },
    { nombre: 'Cambio aceite', descripcion: 'Guía paso a paso para cambiar aceite en equipos XX', duracion: '45 minutos', tipo: "../../../assets/pp.png" },
    { nombre: 'Limpieza fusor', descripcion: 'Video explicativo sobre limpieza de partes', duracion: '1 hora 30 minutos', tipo: "../../../assets/video.png" }]
  

  proveedores: any[] = [{ razon: 'Magneti Marelli', nombre: 'Magneti Marelli', codigo: 'P1465', imagenP: '../../../assets/Magneti.png ', cuit: '30-33447534-4', telefono: '+549118464567', origen: 'Argentina' }, { razon: 'ST Scanitec', nombre: 'ST Scanitec', codigo: 'P1479', imagenP: '../../../assets/st.png', cuit: '30-70757014-4', telefono: '+549118464567', origen:'Brasil' }, { razon: 'ISC', nombre: 'ISC', codigo: 'P1499', imagenP: '../../../assets/ISC.png', cuit: '30-73532442-4', telefono: '+549118464567', origen: 'Italia' }]

  

  productosMM: any[] = [{prov: 'Magneti Marelli',item: 1, codeTexur: 'TEX-0018', code: 'R392692', descripcion: '77H4 ICEGARD ORO LOGIC BOARD', version: 'R143f'}, {prov: 'Magneti Marelli',item: 2, codeTexur: 'TEX-001072', code: 'R7301202770', descripcion: 'ICEGARD ORO LOGIC BOARD', version: ''}, {prov: 'Magneti Marelli',item: 3, codeTexur: 'TEX-001073', code: 'D80', descripcion: 'LP MANOMETER QUICKLOCK', version: 'R143f'}, {prov: 'Magneti Marelli',item: 4, codeTexur: 'TEX-001074', code: 'R7301308090', descripcion: '80 HP MANOMETER QUICKLOCK', version: ''}]
  productosISC: any[] = [{prov: 'ISC',item: 5, codeTexur: 'TEX-001076', code: 'R7400002012', descripcion: 'ANIFOLD 132 1CV 8EV PRES. SENS', version: ''}, {prov: 'ISC',item: 6, codeTexur: 'TEX-001077', code: 'R7410006225', descripcion: 'POE OIL EV GROUP', version: 'R143f'}, {prov: 'ISC',item: 7, codeTexur: 'TEX-001078', code: 'R7104000505', descripcion: 'RUBBER RING', version: ''}, {prov: 'ISC',item: 8, codeTexur: 'TEX-001079', code: 'R7450000825', descripcion: 'HP QUICK CONNECTOR R134A', version: 'R134a'}]
  productosST: any[] = [{prov: 'ST Scanitec', item: 9, codeTexur: 'TEX-001080', code: 'R7450000847', descripcion: 'HP BRASS R1234 QUICK COUPLER', version: 'R1234yf'}, {prov: 'ST Scanitec', item: 10, codeTexur: 'TEX-001081', code: 'R7450000823', descripcion: 'LP QUICK CONNECTOR R134A', version: 'R134a'}, {prov: 'ST Scanitec', item: 11, codeTexur: 'TEX-001082', code: 'R7450000845', descripcion: 'LP BRASS R1234 QUICK COUPLER', version: 'R1234yf'}, {prov: 'ST Scanitec', item: 12, codeTexur: 'TEX-001083', code: 'R7100201300', descripcion: 'BLUE LP FILLING HOSE 3000 MM', version: 'R134a'}]
  faqOro:any[]=[{ pregunta: 'Puedo extender mi suscripción?', respuesta: 'Las suscripciones pueden extenderse y  pueden cambiar el tipo de membresía para el modelo ICEGARD ORO' }]
  faqAgro:any[]=[{ pregunta: 'Porque mi modelo ICEGAR AGRO consume tanto aceite?', respuesta: 'En caso de notar que el consumo de aceite es mayor al que deberia consumir, deberia dirigirse inmediatamente a alguno de los centros especializados para revisar el modelo y evitar daños mayores a futuro' }]
  faqOtros:any[]=[{ pregunta: 'No puedo Encender la máquina por primera vez', respuesta: 'Para la puesta en marcha del equipamiento por primera vez debera seguir los pasos indicados en el apartado "Puesta en marcha" del manual de usuario' },{ pregunta: 'Donde encuentro la garantía de mi producto?', respuesta: 'Puede consultar la garantía de un producto en la sección Post Venta, apartado Garantía y seleccionando el producto deseado.' }]
 faqListado: any[] = [{ pregunta: 'Puedo extender mi suscripción?', respuesta: 'Las suscripciones pueden extenderse y  pueden cambiar el tipo de membresía para el modelo ICEGARD ORO' }, { pregunta: 'No puedo Encender la máquina por primera vez', respuesta: 'Para la puesta en marcha del equipamiento por primera vez debera seguir los pasos indicados en el apartado "Puesta en marcha" del manual de usuario' }, { pregunta: 'Porque mi modelo ICEGAR AGRO consume tanto aceite?', respuesta: 'En caso de notar que el consumo de aceite es mayor al que deberia consumir, deberia dirigirse inmediatamente a alguno de los centros especializados para revisar el modelo y evitar daños mayores a futuro' }, { pregunta: 'Donde encuentro la garantía de mi producto?', respuesta: 'Puede consultar la garantía de un producto en la sección Post Venta, apartado Garantía y seleccionando el producto deseado.' }]
 faqMostrar: any[] = [{ pregunta: 'Puedo extender mi suscripción?', respuesta: 'Las suscripciones pueden extenderse y  pueden cambiar el tipo de membresía para el modelo ICEGARD ORO' }, { pregunta: 'No puedo Encender la máquina por primera vez', respuesta: 'Para la puesta en marcha del equipamiento por primera vez debera seguir los pasos indicados en el apartado "Puesta en marcha" del manual de usuario' }, { pregunta: 'Porque mi modelo ICEGAR AGRO consume tanto aceite?', respuesta: 'En caso de notar que el consumo de aceite es mayor al que deberia consumir, deberia dirigirse inmediatamente a alguno de los centros especializados para revisar el modelo y evitar daños mayores a futuro' }, { pregunta: 'Donde encuentro la garantía de mi producto?', respuesta: 'Puede consultar la garantía de un producto en la sección Post Venta, apartado Garantía y seleccionando el producto deseado.' }] 
 productosMostrar: any[] = [{item: 1, codeTexur: 'TEX-0018', code: 'R392692', descripcion: '77H4 ICEGARD ORO LOGIC BOARD', version: 'R143f'}, {item: 2, codeTexur: 'TEX-001072', code: 'R7301202770', descripcion: 'ICEGARD ORO LOGIC BOARD', version: ''}, {item: 3, codeTexur: 'TEX-001073', code: 'D80', descripcion: 'LP MANOMETER QUICKLOCK', version: 'R143f'}, {item: 4, codeTexur: 'TEX-001074', code: 'R7301308090', descripcion: '80 HP MANOMETER QUICKLOCK', version: ''}]  
  productosOtro: any[] = [{prov: 'Otro',item: 13, codeTexur: 'TEX-001101', code: 'R7301201136', descripcion: 'TRASFORMER 36VA 15V', version: ''}, {prov: 'Otro',item: 14, codeTexur: 'TEX-001102', code: 'R7450001515', descripcion: '1,5Kg SAMPLE WEIGHT', version: ''}, {prov: 'Otro',item: 15, codeTexur: 'TEX-001103', code: 'R7105007114', descripcion: ' EXSHAUST FILTER 1/4', version: ''}]
  foroMostrar:any[]=[{imagen:"../../../assets/Icegard Oro.png",topico:'Foro ICEGARD ORO',temas:8,mensajes:7,ultimoMensaje:"10-09-24"},{imagen:"../../../assets/Icegard Blu.png",topico:'Foro ICEGARD AGRO',temas:4,mensajes:2,ultimoMensaje:"30-09-24"},{imagen:"../../../assets/Rally Pro.png",topico:'Foro OTROS',temas:16,mensajes:4,ultimoMensaje:"17-08-24"},{imagen:"../../../assets/ejemplo4.jpg",topico:'Foro TODOS',temas:3,mensajes:27,ultimoMensaje:"03-07-24"}]
  foroMostrado:any[]=[{imagen:"../../../assets/Icegard Oro.png",topico:'Foro ICEGARD ORO',temas:8,mensajes:7,ultimoMensaje:"10-09-24"},{imagen:"../../../assets/Icegard Blu.png",topico:'Foro ICEGARD AGRO',temas:4,mensajes:2,ultimoMensaje:"30-09-24"},{imagen:"../../../assets/Rally Pro.png",topico:'Foro OTROS',temas:16,mensajes:4,ultimoMensaje:"17-08-24"},{imagen:"../../../assets/ejemplo4.jpg",topico:'Foro TODOS',temas:3,mensajes:27,ultimoMensaje:"03-07-24"}]
  foroMostradoOro:any[]=[{imagen:"../../../assets/Icegard Oro.png",topico:'Foro ICEGARD ORO',temas:8,mensajes:7,ultimoMensaje:"10-09-24"}]
  foroMostradoOtros:any[]=[{imagen:"../../../assets/Rally Pro.png",topico:'Foro OTROS',temas:16,mensajes:4,ultimoMensaje:"17-08-24"}]
  foroMostradoAgro:any[]=[{imagen:"../../../assets/Icegard Blu.png",topico:'Foro ICEGARD AGRO',temas:4,mensajes:2,ultimoMensaje:"30-09-24"}]
  foroMostradoTodos:any[]=[{imagen:"../../../assets/Icegard Oro.png",topico:'Foro ICEGARD ORO',temas:8,mensajes:7,ultimoMensaje:"10-09-24"},{imagen:"../../../assets/Icegard Blu.png",topico:'Foro ICEGARD AGRO',temas:4,mensajes:2,ultimoMensaje:"30-09-24"},{imagen:"../../../assets/Rally Pro.png",topico:'Foro OTROS',temas:16,mensajes:4,ultimoMensaje:"17-08-24"},{imagen:"../../../assets/ejemplo4.jpg",topico:'Foro TODOS',temas:3,mensajes:27,ultimoMensaje:"03-07-24"}]
  modalDetalle: boolean = false
  modalDetalleCampania: boolean = false
  indexProveedor:number = 0
  indexCampania: number = 0
  productosInventario: any[] = [{prov: 'Magneti Marelli',item: 1, codeTexur: 'TEX-0018', code: 'R392692', descripcion: '77H4 ICEGARD ORO LOGIC BOARD', version: 'R143f', stock: 5}, {prov: 'Magneti Marelli',item: 2, codeTexur: 'TEX-001072', code: 'R7301202770', descripcion: 'ICEGARD ORO LOGIC BOARD', version: '', stock: 7}, {prov: 'Magneti Marelli',item: 3, codeTexur: 'TEX-001073', code: 'D80', descripcion: 'LP MANOMETER QUICKLOCK', version: 'R143f', stock: 11}, {prov: 'Magneti Marelli',item: 4, codeTexur: 'TEX-001074', code: 'R7301308090', descripcion: '80 HP MANOMETER QUICKLOCK', version: '', stock: 17}, {prov: 'ISC',item: 5, codeTexur: 'TEX-001076', code: 'R7400002012', descripcion: 'ANIFOLD 132 1CV 8EV PRES. SENS', version: '', stock: 6}, {prov: 'ISC',item: 6, codeTexur: 'TEX-001077', code: 'R7410006225', descripcion: 'POE OIL EV GROUP', version: 'R143f', stock: 7}, {prov: 'ISC',item: 7, codeTexur: 'TEX-001078', code: 'R7104000505', descripcion: 'RUBBER RING', version: '', stock: 7}, {prov: 'ISC',item: 8, codeTexur: 'TEX-001079', code: 'R7450000825', descripcion: 'HP QUICK CONNECTOR R134A', version: 'R134a', stock: 6}, {prov: 'ST Scanitec', item: 9, codeTexur: 'TEX-001080', code: 'R7450000847', descripcion: 'HP BRASS R1234 QUICK COUPLER', version: 'R1234yf', stock: 7}, {prov: 'ST Scanitec', item: 10, codeTexur: 'TEX-001081', code: 'R7450000823', descripcion: 'LP QUICK CONNECTOR R134A', version: 'R134a', stock: 6}, {prov: 'ST Scanitec', item: 11, codeTexur: 'TEX-001082', code: 'R7450000845', descripcion: 'LP BRASS R1234 QUICK COUPLER', version: 'R1234yf', stock: 7}, {prov: 'ST Scanitec', item: 12, codeTexur: 'TEX-001083', code: 'R7100201300', descripcion: 'BLUE LP FILLING HOSE 3000 MM', version: 'R134a', stock: 7},{prov: 'Otro',item: 13, codeTexur: 'TEX-001101', code: 'R7301201136', descripcion: 'TRASFORMER 36VA 15V', version: '', stock:8}, {prov: 'Otro',item: 14, codeTexur: 'TEX-001102', code: 'R7450001515', descripcion: '1,5Kg SAMPLE WEIGHT', version: '', stock:3}, {prov: 'Otro',item: 15, codeTexur: 'TEX-001103', code: 'R7105007114', descripcion: ' EXSHAUST FILTER 1/4', version: '', stock: 5}]

  titulo: string = '';
  descripcion: string = '';
  membresiaNivel: string = '';
  tipoCampania: string = '';
  objetivo: string = '';
  presupuesto: string = '';
  fechaPactada: string = '';
  constructor(private router: Router) {

  }

  cerrarCrearCurso(){
    this.agregarCurso=false
  }
  cerrarInformacion(){
    this.modalInformacion=false
  }

  ngOnInit(): void {
    this.cursos = [...this.allCursos];
    setTimeout(() => {
      this.modalCarrusel = true; 
    }, 2000);
  }

  cargarFq(){
    this.cargaFaq=true
  }

  alertaFaq(){
    alert("FaQ cargada exitosamente")
  }

  cerrarFaq(){
    this.cargaFaq=false
  }

  mostrarGestion(producto: string){
    this.productoGestion = producto
    this.gestionActiva = true
    // this.modalInformacion=true
  }

  cerrarRegistro(){
    this.agregarCliente=false
  }

  alertaCurso(){
    alert("Curso cargado correctamente")
  }

  cerrarDoc(){
    this.cargaDocumentacion=false
  }

  cargarDoc(){
    this.cargaDocumentacion=true
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

  showCursosLibres(){
    this.modalCursosLibres=true
  }

  showAgregarCursos(){
this.agregarCurso=true
  }


  buscarCurso(cadena: string){
    this.limpiarFiltros()
    this.cursos = this.allCursos.filter(curso => 
      curso.nombre.includes(cadena)
    )
  }

  filtroE(stars: number) {
    this.selectedStars = stars;
    this.applyFilters();
  }
  limpiarFiltros() {
    this.selectedStars = null;
    this.selectedPriceRange = null;
    this.cursos = [...this.allCursos];
    (document.querySelectorAll('input[type=radio]') as NodeListOf<HTMLInputElement>).forEach(input => input.checked = false);
    // Limpiar selección de radios
    //(document.querySelectorAll('input[type=radio]') asNodeListOf<HTMLInputElement>).forEach(input => input.checked = false);
  }


  allCursos: any[] = [{nombre:"Aire Acondicionado avanzado y Gestión de Climatización", descripcion: 'Conocer la composición y el funcionamiento de un sistema de climatización automática vehicular, métodos de comprobación del sistema y diagnóstico.', precio: 70, imagen:"../../../assets/ejemplo1.jpg", estrellas: 4, imagenEstrellas: '../../../assets/4de5.png'}, 
    {nombre:"Aire Acondicionado Automotriz", descripcion: 'Conocer conceptos básicos de refrigeración, su aplicación automotriz, diagnóstico y resolución de problemas.', precio: 50, imagen:"../../../assets/ejemplo2.jpg", estrellas: 5, imagenEstrellas: '../../../assets/5de5.png'},
    {nombre:"Aire Acondicionado y Mediciones Eléctricas", descripcion: 'Conocer las magnitudes físicas para comprender los distintos tipos desensores y actuadores utilizados en la gestión de los sistemas de Aire Acondicionado y Climatización Automotriz.', precio: 100, imagen:"../../../assets/ejemplo3.jpg", estrellas: 4, imagenEstrellas: '../../../assets/4de5.png'},
    {nombre:"Utilización de Máquina Recicladora de refrigerante HVAC", descripcion: 'Conocer conceptos básicos de las máquinas de reciclaje de gas de sistemas HVAC, su utilización en sistemas de AC de Autos, Camiones, y Máquinas Agrícolas.', precio: 170, imagen:"../../../assets/ejemplo4.jpg", estrellas: 3, imagenEstrellas: '../../../assets/3de5.png'},
  ]
  agendado() {
    alert('Turno agendado con exito. Numero de seguimiento: 1234')
  }

  consultado() {
    this.hizoConsulta = true
  }

  cerrarGestion(){
    this.productoGestion = ''
    this.gestionActiva = false
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
        this.detalleSuscripciones=false
        this.seguimientoEnvio = false
        this.analisisGraficos=false
        this.detallesVentasClientes=false
        break;
      case 'ventaSuscripciones':
        this.ventaSuscripciones = true
        this.detalleSuscripciones=false
        this.seguimientoEnvio = false
        this.analisisGraficos=false
        this.detallesVentasClientes=false
        break;
      case 'ventaPedidos':
        this.ventaPedidos = true
        this.detalleSuscripciones=false
        this.seguimientoEnvio = false
        this.analisisGraficos=false
        this.detallesVentasClientes=false
        break;
      case 'ventaFacturas':
        this.ventaFacturas = true
        this.detalleSuscripciones=false
        this.seguimientoEnvio = false
        this.analisisGraficos=false
        this.detallesVentasClientes=false
        break;
      case 'ventaAnalisis':
        this.ventaAnalisis = true
        this.detalleSuscripciones=false
        this.seguimientoEnvio = false
        this.analisisGraficos=false
        this.detallesVentasClientes=false
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

  cambioAnalisis(parametro: string) {
    this.almacenamientoDatos = false
    this.analisisDeDatos = false

    switch (parametro) {
      case 'almacenamiento':
        this.almacenamientoDatos = true
        break;
      case 'analisis':
        this.analisisDeDatos = true
        break;
    }
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
        this.fichaSuscripcion=false
        break;
    }
  }
  seleccionar(seccion: string) {
    this.selected = seccion;
  }
  
  seleccionarAnalisis(seccion: string) {
    this.selectedAnalisis = seccion;
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
    alert("Curso creado correctamente")
  }
  mostrarDetalle() {
    // this.gestioncliente=false
    this.detallesDistribuidor = true
  }

  mostrarInfo(pos:number){
    this.modalInformacion=true
    console.log(pos)
    console.log(this.instructivos)
    this.tituloInformacion=this.instructivos[pos].titulo
    this.descripcionInformacion=this.instructivos[pos].descripcion
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
  mostrarFichaSuscripcion(){
    this.fichaSuscripcion=true
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

  addCliente(){
    this.agregarCliente=true
  }

  hideCursosLibres(){
    this.modalCursosLibres=false
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

  borrarFactura() {
    alert('Factura borrada con éxito')
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

  cerrarDetalle(){
    this.modalDetalle = false
  }

  showDetallesProveedores(indice: number){
    this.indexProveedor = indice
    this.modalDetalle = true
  }

  onSelectChange(event: any) {
    const selectedValue = event.target.value;
    switch (selectedValue) {
      case 'MM':
        this.productosMostrar = this.productosMM
        break;
      case 'ST':
        this.productosMostrar = this.productosST
        break;
      case 'ISC':
        this.productosMostrar = this.productosISC
        break;
      case 'OTRO':
        this.productosMostrar = this.productosOtro
        break;
    }
  }

  onSelectChangePostVenta(event: any) {
    const selectedValue = event.target.value;
    switch (selectedValue) {
      case 'AGRO':
        this.faqMostrar = this.faqAgro
        break;
      case 'ORO':
        this.faqMostrar = this.faqOro
        break;
      case 'OTROS':
        this.faqMostrar = this.faqOtros
        break;
    case 'TODOS':
      this.faqMostrar = this.faqListado
      break;
  }
}

onSelectChangeForo(event:any)
{
  const selectedValue = event.target.value;
  switch (selectedValue) {
    case 'ORO':
      this.foroMostradoTodos = this.foroMostradoOro
      break;
    case 'AGRO':
      this.foroMostradoTodos = this.foroMostradoAgro
      break;
     case 'OTROS':
      this.foroMostradoTodos = this.foroMostradoOtros
      break;
  case 'TODOS':
    this.foroMostradoTodos = this.foroMostrado
    break;
}
}

  showDetallesCampania(indice: number){
    this.indexCampania = indice
    this.modalDetalleCampania = true
  }

  cerrarDetallesCampania(){
    this.modalDetalleCampania = false
  }

  eliminarCampania(indexCampania: number){
    this.campanasLista.splice(indexCampania, 1)
    this.modalDetalleCampania = false
  }

  crear() {
    const nuevaCampania = {
      titulo: this.titulo,
      descripcion: this.descripcion,
      aplica: this.membresiaNivel,
      tipo: this.tipoCampania,
      objetivo: this.objetivo,
      presupuesto: this.presupuesto,
      fecha: this.fechaPactada
    };
    this.campanasLista.push(nuevaCampania)
    this.titulo = '';
    this.descripcion = '';
    this.membresiaNivel = '';
    this.tipoCampania = '';
    this.objetivo = '';
    this.presupuesto = '';
    this.fechaPactada = '';
  }



}



