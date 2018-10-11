export class CrearModel {
    constructor(
          public nombre: string,
          public descripcion: string,
          public tipoRecurso: number,
          public idSolicitud: number,
          public idProyecto: number,
          public descripcionSolicitud: string,
          public estado: number
     ) { }
}
