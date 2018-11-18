import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


import { CrearModel } from '../../models/crear.model';
import { environment } from '../../../environments/environment';
import { ComentarioModel } from 'src/app/models/comentario.model';


const URL = environment.url;
const crear = 'recurso';
const crearComentario = 'comentario';

@Injectable()
export class CrearService {
    constructor(private http: HttpClient) { }

    add(CrearAdd: CrearModel): Observable<any> {
        return this.http.post<any>(URL + crear, CrearAdd);
    }

    addComment(CrearComment: ComentarioModel): Observable<any> {
        return this.http.post<any>(URL + crearComentario, CrearComment);
    }
}
