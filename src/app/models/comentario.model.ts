export class ComentarioModel {
    constructor(
          public idRecurso: number,
          public comentario: string,
          public revisor: number,
          public descripcion: string,
          public fecha: String,
          public estado: string
     ) { }
}
