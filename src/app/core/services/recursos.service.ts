import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Recursos } from '../../recursos/recursos';
import { IComentarios } from 'src/app/interfaces/comentario.interface';
import { Iauditoria } from 'src/app/interfaces/admingestion.interface';
import { RecursoModel } from 'src/app/models/recurso.model';


const URL = environment.url;
const ESTADOS = 'recursos?estado=';
const ALL = 'recursos/';
const TIPORECURSO = 'tipo-recursos/';
const  COMMENTS  = 'comentarios?idRecurso=';
const AUDITORIAGESTION = 'auditoria?estado=';
const RECURSO = 'recurso ';
const  RESPONSABLE  = 'responsable-recurso?recurso=';
@Injectable()
export class RecursosServicio {

    constructor(private http: HttpClient) {}

    getResourcesFiltered(estado: string): Observable<Recursos[]> {
        return this.http.get<Recursos[]>(URL + ESTADOS + estado);
    }

    getAll(): Observable<Recursos[]> {
        return this.http.get<Recursos[]>(URL + ALL);
    }

    getResurcesType(): Observable<Recursos[]> {
        return this.http.get<Recursos[]>(URL + TIPORECURSO);
    }

    getCommentsById(id: any): Observable<IComentarios[]> {
        return this.http.get<IComentarios[]>(URL + COMMENTS + id);
    }

    getAuditoriaStatus(id: any): Observable<Iauditoria[]> {
        return this.http.get<Iauditoria[]>(URL + AUDITORIAGESTION + id);
    }


    setAuditorResurces(recurce: RecursoModel): Observable<any> {
        return this.http.put<any>(URL + RECURSO , recurce);
    }

  getResponsable(id: any): Observable<Iauditoria[]> {
        return this.http.get<Iauditoria[]>(URL + RESPONSABLE + id);
    }

}
