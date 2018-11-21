export interface Iauditoria {
    auditor: Auditor;
    descripcion: string;
    descripcionSolicitud: string;
    estado: number;
    id: number;
    idProyecto: number;
    idSolicitud: number;
    nombre: string;
    tipoRecurso: TipoRecurso;
    enModificacion: boolean;
    nuevoAsignado: string;
}

export class Auditor {
    apellidos: string;
    id: number;
    nombres: string;
    rol: number;
    usuario: string;
}
class TipoRecurso {
    id: number;
    nombre: string;
}
