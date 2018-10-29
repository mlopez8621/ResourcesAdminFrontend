import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ReasignacionService } from "./reasignacion.services";
import { Reasignacion } from "./reasignacion";
import { ResponsableService } from "../responsable/responsable.services";
import { Responsable } from "../responsable/responsable";
import {CrearModel} from "../models/crear.model";
import {ReasignarModel} from "../models/reasignar.model";

import swal from "sweetalert2";



@Component({
  selector: 'app-reasignacion',
  templateUrl: './reasignacion.component.html',
  styleUrls: ['./reasignacion.component.css']
})
export class ReasignacionComponent implements OnInit {
   reasignarform: FormGroup;
   reasignarData: ReasignarModel = null;

  constructor(private reasignacionService: ReasignacionService,private responsableService: ResponsableService) { }
  reasignacion: Reasignacion[];
  responsable: Responsable[];
  private _reasignacionService: ReasignacionService
  selected : any;
  ngOnInit() {
    this.getListReasignacion();
    this.getListResponsable();
  }

  getResources():void{
      alert(this.selected)
  }


  getListReasignacion():void{
    this.reasignacionService.getAllPhases().subscribe((reasignacion:any) => this.reasignacion = reasignacion.results);
  }

  getListResponsable():void{
    this.responsableService.getAllPhases().subscribe((responsable:any) => this.responsable = responsable.results);
  }

  reasignar(): void {
    if ( this.reasignarform.invalid) {
      return;
    }

    this.reasignarData = new ReasignarModel(
       this.reasignarform.value.id,
       this.reasignarform.value.responsable,
       this.reasignarform.value.rescursos,
    );
       this._reasignacionService.reasignar( this.reasignarData).subscribe(
         respon => {
          console.log(respon); // validar la respuesta
          swal(
            'OK!',
            'Creado Exitosamente',
            'success'
          );
       },
       err => {
        console.log(err); // cuando hay error
        swal(
          'ERROR!',
          'Error creando la solicitud',
          'error'
        );
       } );


   }
}

