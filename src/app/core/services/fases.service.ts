import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Fases } from '../../fases/fases';

const URL = environment.url;
const ESTADOS = 'estados';

@Injectable()
export class FasesService {
    constructor(private http: HttpClient) { }

    getAllPhases(): Observable<Fases[]> {
        return this.http.get<Fases[]>(URL + ESTADOS);
    }
}
