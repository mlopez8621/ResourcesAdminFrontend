


export class RecursoModel {
    constructor(
      public id: number,
      public nombre: string,
      public descripcion: string,
      public tipoRecurso: number,
      public idSolicitud: number,
      public idProyecto: number,
      public descripcionSolicitud: string,
      public estado: number,
      public auditor: string,
    ) { }
  }

  export class DetalleRecursoModel {
    constructor(
      public id: number,
      public nombre: string,
      public descripcion: string,
      public tipoRecurso: number,
      public idSolicitud: number,
      public idProyecto: number,
      public descripcionSolicitud: string,
      public estado: number,
      public auditor: string,
    ) { }
  }
