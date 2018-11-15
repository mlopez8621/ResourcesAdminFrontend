import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Responsable } from "./responsable";
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

const URL = environment.url;
const RESPONSABLE = "responsable";
const ONE_RESPONSABLE = "responsable/id/";

@Injectable()
export class ResponsableService{

    constructor(private http:HttpClient){}

    getAllPhases():Observable<Responsable[]>{
        return this.http.get<Responsable[]>(URL+RESPONSABLE);
    }

    getOneResponsable():Observable<Responsable[]>{
        return this.http.get<Responsable[]>(URL+ONE_RESPONSABLE);
    }
}
