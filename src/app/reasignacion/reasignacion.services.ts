import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Reasignacion } from "./reasignacion";
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { ReasignarModel } from "../models/reasignar.model";

const URL = environment.url;
const REASIGNACION = "recurso-responsable";
const reas_update = "recurso_res/";
@Injectable()
export class ReasignacionService{

    constructor(private http:HttpClient){}

    getAllPhases():Observable<Reasignacion[]>{
        return this.http.get<Reasignacion[]>(URL+REASIGNACION);
    }

    reasignar(reasignarUpdate: ReasignarModel): Observable<any> {
        alert (reasignarUpdate.id);
        alert (reasignarUpdate.responsable);
        alert (reasignarUpdate.rescursos);
          return this.http.put<any>(URL + reas_update + reasignarUpdate.id + "/" , reasignarUpdate);
      }
}
