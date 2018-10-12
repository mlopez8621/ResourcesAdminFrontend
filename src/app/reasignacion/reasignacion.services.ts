import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Reasignacion } from "./reasignacion";
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

const URL = environment.url;
const REASIGNACION = "recurso-responsable";

@Injectable()
export class ReasignacionService{

    constructor(private http:HttpClient){}

    getAllPhases():Observable<Reasignacion[]>{
        return this.http.get<Reasignacion[]>(URL+REASIGNACION);
    }
}
