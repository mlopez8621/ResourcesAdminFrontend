import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Recursos } from "./recursos";
import { environment } from "../../environments/environment";

const URL = environment.url;
const ESTADOS = 'recursos?estado=';

@Injectable()
export class RecursosServicio {

  constructor(private http: HttpClient) {
  }

  getResourcesFiltered(estado: string): Observable<Recursos[]> {
    return this.http.get<Recursos[]>(URL + ESTADOS + estado);
  }
}
