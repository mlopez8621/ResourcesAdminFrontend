import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Recurso_controlcalidad } from "./recurso_controlcalidad";
import { environment } from "../../environments/environment";

const URL = environment.url;
const NAME = "recurso-controlcalidad";

@Injectable()
export class Recursos_controlcalidadServicio{

    constructor(private http:HttpClient){}

    getAll():Observable<Recurso_controlcalidad[]>{
      return this.http.get<Recurso_controlcalidad[]>( URL + NAME);
    }

}
