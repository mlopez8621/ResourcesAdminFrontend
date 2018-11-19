import { Component, OnInit } from '@angular/core';
import { Recurso_controlcalidad } from "./recurso_controlcalidad";
import { Recursos_controlcalidadServicio} from "./recurso-controlcalidad.service";
import {ReasignarModel} from '../models/reasignar.model';
import swal from "sweetalert2";

@Component({
  selector: 'app-recurso-controlcalidad',
  templateUrl: './recurso-controlcalidad.component.html',
  styleUrls: ['./recurso-controlcalidad.component.css']
})
export class RecursoControlcalidadComponent implements OnInit {
  cambiar_estadoData: Recurso_controlcalidad = null;

  constructor(private recursocontrolcalidadService: Recursos_controlcalidadServicio) {
  }

  recursocontrolcalidad: Recurso_controlcalidad[];
  selected: any;


  ngOnInit() {
    this.getListRecurso_controlcalidad();
  }

  getListRecurso_controlcalidad(): void {
    this.recursocontrolcalidadService.getAll().subscribe((recursocontrolcalidad: any) => this.recursocontrolcalidad = recursocontrolcalidad.results)
  }

  cambiar_estado(estado): void {
     // Aqui ya llega el nuevo responsable en un campo nuevo que se llama idNuevoResponsable en rasig, ya es hacer la actualizacion
    console.log(estado.resultado);
  if (estado.resultado === true) {
        estado.resultado = false;
      } else {
        estado.resultado = true;
    }
    this.cambiar_estadoData = new Recurso_controlcalidad(
      estado.id,
      estado.nombre_recurso,
      estado.nombre_item,
      estado.resultado,
    );
    this.recursocontrolcalidadService.cambiar_estado(this.cambiar_estadoData).subscribe(
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
      });
    //location.reload();
  }

}

