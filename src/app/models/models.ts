

export interface Status {
  tc?: number;
  sr1?: number;
  d?: number;
  sr2?: number;
}

export interface Taller {
  idtaller: number; // ID del taller que varía de taller de Dolly, remolque o tracto
  terminal: string;
  idterminal: number;
  taller: string;
  tc: number;
  idtractoconfig: number;
  idconfiguracion: number;
  srUno: number;
  d: number;
  srDos: number;
  fecha: string;
  sr1tipo: string;
  sr2tipo: string;
  operador: string;
  idoperador: number;
  falla: string;
  configuraciones: FallaConfig;
  idconfigstatus: number;
  idtruckstatus: number;
  idtractodriver: number;
}

export interface Tc {
  idtallerstatus: number; // Id de la tabla de tractocamion_taller_status
  idtractoconfig: number;
  tallerfallaid: number;
  falla: string;
  fecha: string;
  tc: number;
  locales: number;
  taller: string;
  tipo: string;
  inmovil: boolean;
  nequipment: number;
}

export interface SrOne {
  idtallerstatus: number; // Id de la tabla de remolque_taller_status
  tallerfallaid: number;
  idtractoconfig: number;
  taller: string;
  falla: string;
  fecha: string;
  remolque: number;
  srtipo: string;
  inmovil: boolean;
  tipo: string;
  nequipment: number;
  oneproperty: string;
}

export interface FallaConfig {
  tc: Tc[];
  srOne: SrOne[];
  dolly: Dolly[];
  srTwo: SrTwo[];
}

export interface Dolly {
  idtallerstatus: number; // Id de la tabla de dolly_taller_status
  tallerfallaid: number;
  idtractoconfig: number;
  taller: string;
  falla: string;
  fecha: string;
  dolly: number;
  tipo: string;
  inmovil: boolean;
  nequipment: number;
}

export interface SrTwo {
  idtallerstatus: number; // Id de la tabla de remolque_taller_status
  tallerfallaid: number;
  idtractoconfig: number;
  taller: string;
  falla: string;
  fecha: string;
  remolque: number;
  srtipo: string;
  inmovil: boolean;
  tipo: string;
  nequipment: number;
  twoproperty: string;
}

export interface ItemDropdown {
  value: any;
  label: string;
}

export interface EquipoMtto {
  tallerfallaid: number;
  idtractoconfig: number;
  falla: string;
  fecha: Date;
  taller: string;
  tipo: string;
  srtipo: string;
  prioridad: boolean;
  fechasalida: Date;
  finalizado: number;
  nequipment: number;
  idtaller: number;
  id: number;
  idtipo: number;
  numero: number;
  idtallerStatus: number;
  idtallerFecha: number;
  finishToCancel: boolean;
  loading: boolean;
}

export interface EquipoMttoJSON {
  tallerfallaid: number;
  idtractoconfig: number;
  falla: string;
  fecha: string;
  taller: string;
  tipo: string;
  srtipo: string;
  prioridad: boolean;
  fechasalida: string;
  finalizado: number;
  nequipment: number;
  idtaller: number;
  id: number;
  idtipo: number;
  numero: number;
  idtallerStatus: number;
  idtallerFecha: number;
}

export interface TCRecords {
  id: number;
  idtaller: number;
  terminado: number;
  fechainicial: string;
  falla: string;
  fechasalida: string;
  idtractocamion: number;
  inmovilizado: number;
  categoria: number;
  idfecha: number;
  idstatus: number;
}

export interface SRRecords {
  id: number;
  idtaller: number;
  terminado: number;
  fechainicial: string;
  falla: string;
  fechasalida: string;
  idremolque: number;
  inmovilizado: number;
  categoria: number;
  idfecha: number;
  idstatus: number;
}

export interface DRecords {
  id: number;
  idtaller: number;
  terminado: number;
  fechainicial: string;
  falla: string;
  fechasalida: string;
  iddolly: number;
  inmovilizado: number;
  categoria: number;
  idfecha: number;
  idstatus: number;
}

export interface Operador {
  conductor: string;
  operador: number;
  nombre: string;
}

export interface SinOperador {
  sr1tipo: string;
  tc: number;
  sr1: number;
  d: number;
  sr2: number;
  estatus: string;
  terminal: string;
  operadorid?: number; // Solo se usa para el ngModel
  ubicacion: string;
  fecha: Date;
  idtractoperador: number;
  idterminal: number;
}

export interface TallerLugar {
  id: number;
  nombre: string;
  direccion?: string;
  interno: boolean;
}

export interface SinUnidad {
  idoperador: number;
  conductor: string;
  fecha: Date;
  stat: string;
  disponible: string;
  ubicacion: string;
  idtractoperador: number;
}

export interface ResponseSinUnidad {
  sinunidad: SinUnidad;
  idstat: number;
}

export interface OperadorBaja {
  idoperador: number;
  conductor: string;
  fechabaja: string;
  motivo: string;
  idbaja: number;
}

export interface OpcionesSinUnidad {
  idoperador: number;
  conductor: string;
  stat: string;
}

export interface Terminal {
  terminal: number;
  nombreterminal: string;
  orden: number;
  nombrecliente: string;
  clienteid: number;
}

export interface Cliente {
  id: number;
  nombre: string;
  orden: number;
}

export interface Categoria {
  id: number;
  nombre: string;
  presencia: number;
}

export interface ViajeEstado {
  id: number;
  estatus: string;
}

export interface Flota {
  unidad: number;
  remolque_uno: number;
  dolly: number;
  remolque_dos: number;
  mode: number; // 1: Estatus de Unidad, 2: Taller, 3: Unidad sin Conductor, 4: Remolques Disp.
  idconfiguracion?: number;
  idoperador?: number;
  conductor?: string;
  local?: LocalConfig;
}

// eslint-disable-next-line no-shadow
export enum LoadingStatus {
  user1 = 'Cargando Datos de Usuario..',
  user2 = 'Cargando Entorno...',
  user3 = 'Preparando para Guardar...',
  user4 = 'Guardando Status...',
  req1 = 'Procesando Informacion...',
  req2 = 'Cargando Unidades...',
  req3 = 'Cargando Terminales...',
  req4 = 'Cargando Operadores...',
  req5 = 'Cargando Informacion Adicional...',
  req6 = 'Cargando Todos los Programas...',
}


export interface Configuraciones {
  srtipo: string;
  sr2tipo: string;
  idconfiguracion: number;
  dolly: number;
  sr1: number;
  sr2: number;
  fecha: Date;
  ubicacion: string;
  estatus: string;
  idtractoconfig: number;
  idconfigstatus: number;
}



export interface SaveRecord {
  origendestino: SaveStorage[];
  estatus: SaveStatus[];
  programa: SaveProgram[];
  terminales: SaveTruckTerminal[];
  operador: SaveStatusDriver[];
  configuraciones: SaveDateConfig[];
  sinconductor: SaveDateNoDriver[];
}

export interface SaveStorage {
  origen: number;
  destino: number;
  idviaje: number;
  idestatus: number;
  idprogramas: number;
  idviajealmacenaje: number;
}

export interface SaveStatus {
  idviajealmacenaje: number;
  idestatus: number;
}

export interface SaveDateConfig {
  idtractoconfig: number;
  created_at: string;
}

export interface SaveDateNoDriver {
  idtractooperador: number;
  created_at: string;
}

export interface SaveProgram {
  idviajealmacenaje: number;
  idprograma: number;
}

export interface SaveDateSrDisponibles {
  idtractoconfig: number;
  fecha: string;
  ubicacion: string;
  estatus: string;
}

export interface SaveDateSinCoductor {
  idtractoperador: number;
  fecha: string;
  ubicacion: string;
  estatus: string;
}

export interface SaveTruckTerminal {
  idtractocamion: number;
  idterminal: number;
}

export interface SaveStatusDriver {
  idoperador: number; // Es id de la tabla tracto_opperador
  descripcion?: string;
  fecha?: string;
}

export interface TractoConfig {
  sr1: number;
  sr2: number;
  d: number;
  tc: number;
  idtractoconfig: number;
  idconfiguracion: number;
  idviajenormal: number;
  locales: number;
  sr1tipo: string;
  sr2tipo: string;
  idtruckstatus: number;
  idconfigstat: number;
  local?: LocalConfig;
}

export interface LocalConfig {
  sr1: number;
  sr2: number;
  d: number;
  sr1tipo: string;
  sr2tipo: string;
  idconfiguracion: number;
  idtractoconfig: number;
  idviajenormal: number;
}

export interface TractoForm {
  tcfailure: string;
  tcoutWorking: boolean;
  tcWorkship: number;
  tcMtto: boolean;
  tctype: number;
  truck: number;
  dynamicfailures: DynamicFailures[];
}

export interface ContainerForm {
  srfailure: string;
  sroutWorking: boolean;
  workship: number;
  srtype: number;
  container: number;
  dynamicfailures: DynamicFailures[];
}

export interface DollyForm {
  dfailure: string;
  doutWorking: boolean;
  workship: number;
  dtype: number;
  dolly: number;
  dynamicfailures: DynamicFailures[];
}

export interface DynamicFailures {
  dynamicfailure: string;
  dynamicoutWorking: boolean;
  dynamictype: number;
}

export interface FixResp {
  status: Status;
  equipo: Configuraciones;
  solo: SinOperador;
}

export interface CustomConfigResp {
  status: Status[];
  equipo: Configuraciones[];
  solo: SinOperador[];
  workship: Taller[];
}

export interface ConfigResp {
  status: Status[];
  solo: SinOperador[];
  workship: boolean; // boolean;
}

export interface DoubleConfigResp {
  status: Status[];
  equipo: Configuraciones[];
  solo: SinOperador[];
  workship: boolean; // boolean;
}

export interface DoubleConfigChangeResp {
  equipo: Configuraciones[];
  tracto: DoubleConfigResp;
}

export interface ConfigChangeResp {
  // equipo es un objeto porque se usa para reemplazar remolques y quitar para los normales
  equipo: Configuraciones;
  tracto: ConfigResp;
}

export interface RemolqueDetalles {
  numero: number;
  marca: string;
  fecha_adquisicion: string;
  ano_modelo: number;
  nserie: string;
  precio: number;
  placas: string;
  nombre: string;
  longitudPies: string;
  ejes: number;
  sumasegurada: string;
  sumaasegurada: number;
  depreciacion: Depreciacion;
  depreciado: Depreciado[];
  propuestasqualitas: Qualitas[];
}

export interface DollyDetalles {
  nserie: string;
  numero: string;
  marca: string;
  ano_modelo: number;
  fecha_adquisicion: string;
  precio: number;
  ejes: number;
  tipo: string;
  sumasegurada: string;
  sumaasegurada: number;
  depreciacion: Depreciacion;
  depreciado: Depreciado[];
  propuestasqualitas: Qualitas[];
}
export interface Equipo {
  tractos: TractoDetalles[];
  remolques: RemolqueDetalles[];
  dollies: DollyDetalles[];
  utilitarios: UtilDetalles[];
}

export interface Depreciacion {
  porcentaje: number;
  anos: number;
}

export interface UtilDetalles {
  nserie: string;
  ano_modelo: number;
  placas: string;
  sumasegurada: string;
  sumaasegurada: number;
  precio: number;
  depreciacion: Depreciacion;
  depreciado: Depreciado[];
  propuestasqualitas: Qualitas[];
  marca: string;
  modelo: string;
  color: string;
}

export interface TractoDetalles {
  numero: number;
  marca: string;
  fecha_adquisicion: string;
  ano_modelo: number;
  nserie: string;
  tipo: string;
  color: string;
  precio: number;
  placas: string;
  sumasegurada: string;
  sumaasegurada: number;
  depreciacion: Depreciacion;
  depreciado: Depreciado[]; // Se usa en subtabla
  propuestasqualitas: Qualitas[];
}

export interface Depreciado {
  ano: number;
  meses: number;
  costoDepreciado: number;
  costoAcumulado: number;
  costoActual: number;
}

export interface Qualitas {
  costo: number;
  fechaCoda?: string;
  costoQualitas: number;
  fechaQualitas?: string;
}

export interface Propuesta {
  nserie: string;
  fecha: string;
  propuesta: number;
}

export interface FixTruck {
  wholeRow: Taller;
  superIndex: number;
  row: any; // Se usa any porque puede ser del tipo Tc, SrOne, SrTwo, Dolly
  childIndex: number;
}

export interface DynamicItems {
  dynamicdolly: number;
  dynamicsrOne: number;
  dynamicsrTwo: number;
  dynamictc: number;
  sr1type?: string;
  sr2type?: string;
  dtype?: string;
}

export interface PrepareCustomConfigs {
  configintactos: boolean;
  idconfig: number;
  remolque_uno: number;
  remolque_dos: number;
  dolly: number;
  tc: number;
  ubicacion: string;
  estatus: string;
}

export interface FormsData {
  location: string;
  status: string;
  values: DynamicItems;
}

export interface EquipoGeneral {
  nserie: string;
  ano_modelo: number;
  numero: number;
  marca: string;
  ejes: number;
  tipo: string;
  equipo: string;
  status: boolean;
}

export interface ListItems {
  sr1: number;
  sr2: number;
  d: number;
  tc: number;
  sr1tipo: string;
  sr2tipo: string;
  idtractoconfig: number;
  idconfiguracion: number;
  idconfigstatus: number;
  idviaje: number;
}

export interface MttoReport {
  tallerfallaid: number;
  taller: string;
  tipo: string;
  falla: string;
  finalizado: number;
  numero: number;
  prioridad: boolean;
  nequipment: number;
  fecha: string;
}

export interface MttoResponse {
  total: number;
  current_page: number;
  per_page: number;
  data: any;
}

export interface MttoStat {
  nombre: string;
  cantidad: number;
}

export interface Events {
  title: string;
  start: string;
  end?: string;
}

export interface CalendarMtto {
  nequipment: number;
  tallerfallaid: number;
  falla: string;
  equipo: number;
  prioridad: number;
  fecha: string;
  horaentrada: string;
  horasalida: string;
  finalizado: number;
}

export interface ScheduleTractoForm {
  tcfailure: string;
  tcoutWorking: boolean;
  scheduledtime: Date;
  scheduledate: Date;
  tcMtto: boolean;
  tctype: number;
  truck: number;
  dynamicfailures: ScheduleDynamicFailures[];
}

export interface ScheduleContainerForm {
  srfailure: string;
  sroutWorking: boolean;
  scheduledtime: Date;
  scheduledate: Date;
  srtype: number;
  container: number;
  dynamicfailures: ScheduleDynamicFailures[];
}

export interface ScheduleDollyForm {
  dfailure: string;
  doutWorking: boolean;
  scheduledtime: Date;
  scheduledate: Date;
  dtype: number;
  dolly: number;
  dynamicfailures: ScheduleDynamicFailures[];
}

export interface ScheduleDynamicFailures {
  dynamicfailure: string;
  dynamicoutWorking: boolean;
  dynamictype: number;
  dynamicrepeat: boolean;
  dynamicrepeattime: boolean;
  dynamictime: Date;
  dynamicdate: Date;
}

export interface DataSidebar {
  status: number;
  viaje: number;
  terminal: string;
  terminalid: number;
  idprograma: number;
  unidad: number;
  conductor: string;
  idconductor: number;
  idviaje: number;
}

export interface KMEquipment {
  tracto: string;
  remolque: string;
  dolly: string;
  remolqueDos: string;
  fecha: string;
  kmRecorridos: number;
}

export interface DriverSave {
  names: string;
  lastname: string;
  seclastname: string;
}

export interface IntranetSideBar {
  id: number;
  idvista: number;
  nodoDos: string;
  nodoUno: string;
  icon: string;
  routename: string;
}

export interface TruckReplaceResponse {
  sinoperador: SinOperador;
  status: Status;
}

export interface Customer {
  id: number;
  nombre: string;
  order: number;
  oculto: boolean;
}

export interface CustomerValue {
  id: number;
  week: number;
  cantidad: number;
}

export interface AdvanTerminal {
  idterminal: string;
  nombre: string;
}

export interface TicketResponse {
  precio: number;
  importe: number;
  gasolinera_clave: number;
  gasolinera_descrip: string;
  litros: number;
}
