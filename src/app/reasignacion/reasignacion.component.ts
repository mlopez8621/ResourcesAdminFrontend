import { Component, OnInit } from '@angular/core';
import { ReasignacionService } from "./reasignacion.services";
import { Reasignacion } from "./reasignacion";
import { ResponsableService } from "../responsable/responsable.services";
import { Responsable } from "../responsable/responsable";
import swal from "sweetalert2";
import { ReasignarModel } from '../models/reasignar.model';

@Component({
  selector: 'app-reasignacion',
  templateUrl: './reasignacion.component.html',
  styleUrls: ['./reasignacion.component.css']
})
export class ReasignacionComponent implements OnInit {
  reasignarData :  ReasignarModel  =  null ;
  constructor(private reasignacionService: ReasignacionService,private responsableService: ResponsableService) { }
  reasignacion: Reasignacion[];
  responsable: Responsable[];
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

  showResponsable(event,item:any):void{
    item.idNuevoResponsable=event;
    alert(item);
}

  reasignar(rasig): void {
    debugger; // Aqui ya llega el nuevo responsable en un campo nuevo que se llama idNuevoResponsable en rasig, ya es hacer la actualizacion
    console.log(rasig)
    // if ( this.reasignarform.invalid) {
    //   return;
    // }

    var str = rasig.rescursos;
    var idr = str.split(":", 1);
    console.log(idr)

    var numidr = +idr;
    console.log(numidr)
    this.reasignarData = new ReasignarModel(
       rasig.id,
       rasig.responsable,
       rasig.idNuevoResponsable,
       rasig.recurso,
       numidr,

    );

    this.reasignacionService.reasignar( this.reasignarData).subscribe(
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


