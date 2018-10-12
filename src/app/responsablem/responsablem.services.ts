import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Responsablem } from "./responsablem";
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

const URL = environment.url;
const RESPONSABLEM = "responsable";

@Injectable()
export class ResponsablemService{

    constructor(private http:HttpClient){}

    getAllPhases():Observable<Responsablem[]>{
        return this.http.get<Responsablem[]>(URL+RESPONSABLEM);
    }
}
