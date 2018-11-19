import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Recurso_controlcalidad } from "./recurso_controlcalidad";
import { environment } from "../../environments/environment";
import {ReasignarModel} from '../models/reasignar.model';

const URL = environment.url;
const NAME = "recurso-controlcalidad";
const recu_update = "lista-chequeo/";

@Injectable()
export class Recursos_controlcalidadServicio{

    constructor(private http:HttpClient){}

    getAll():Observable<Recurso_controlcalidad[]>{
      return this.http.get<Recurso_controlcalidad[]>( URL + NAME);
    }

    cambiar_estado(recursoUpdate: Recurso_controlcalidad): Observable<any> {

        return this.http.put<any>(URL + recu_update + recursoUpdate.id + '/' , recursoUpdate);
    }


}
