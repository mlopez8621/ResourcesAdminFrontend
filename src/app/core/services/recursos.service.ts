import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Recursos } from '../../recursos/recursos';


const URL = environment.url;
const ESTADOS = 'recursos-filtrados?estado=';
const TIPORECURSO = 'tipo-recursos/';
@Injectable()
export class RecursosServicio {

    constructor(private http: HttpClient) {}

    getResourcesFiltered(estado: string): Observable<Recursos[]> {
        return this.http.get<Recursos[]>(URL + ESTADOS + estado);
    }

    getResurcesType(): Observable<Recursos[]> {
        return this.http.get<Recursos[]>(URL + TIPORECURSO);
    }

}
