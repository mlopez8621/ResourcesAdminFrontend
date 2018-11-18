import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Recursos } from '../../recursos/recursos';
import { IComentarios } from 'src/app/interfaces/comentario.interface';
import {IRecursoIntermedio} from "../../interfaces/recursoIntermedio.interface";


const URL = environment.url;
const ESTADOS = 'recursos?estado=';
const ALL = 'recursos/';
const TIPORECURSO = 'tipo-recursos/';
const  COMMENTS  = 'comentarios?idRecurso=';
const  RECURSOINTERMEDIO  = 'recurso-intermedio?idRecurso=';
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

    getRecursoIntermedioById(id: any): Observable<IRecursoIntermedio[]> {
        return this.http.get<IRecursoIntermedio[]>(URL + RECURSOINTERMEDIO + id);
    }


}
