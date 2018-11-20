import { Component, OnInit , ViewChild} from '@angular/core';
import { RecursosServicio } from '../core/services/recursos.service';
import swal from 'sweetalert2';
import { Iauditoria, Auditor } from '../interfaces/admingestion.interface';
import { RecursoModel, DetalleRecursoModel } from '../models/recurso.model';
import { ResponsableService } from '../responsable/responsable.services';
import { Responsable } from '../responsable/responsable';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admingestion',
  templateUrl: './admingestion.component.html',
  styleUrls: ['./admingestion.component.css'],
  // add NgbModalConfig and NgbModal to the component providers
  providers: [NgbModalConfig, NgbModal]
})
export class AdmingestionComponent implements OnInit {
  @ViewChild('contentModal') private content;
  responsable: Responsable[];
  detalle: DetalleRecursoModel;
  constructor(
    private _recursosService: RecursosServicio,
    private responsableService: ResponsableService,
    config: NgbModalConfig,
    private modalService: NgbModal
    ) {
      config.backdrop = 'static';
      config.keyboard = false;
     }
  recursos: Iauditoria [] ;

  ngOnInit() {
    swal.showLoading();
    this._recursosService.getAuditoriaStatus(4)
    .subscribe((result: any) => { this.recursos = result.results;
      console.log(result);
      swal.close();
    });
    this.getListResponsable();
  }

  getListResponsable(): void {
    this.responsableService.getAllPhases().subscribe((responsable: any) => this.responsable = responsable.results);
  }



  Asignar(value: any , item: Iauditoria): void {
    item.nuevoAsignado = value;
  }

  showEdict( item: Iauditoria): void {
    item.enModificacion = true;
  }

  saveAsignado(item: Iauditoria): void {

    if (item.nuevoAsignado) {
      swal.showLoading();
      const Recurso: RecursoModel = new RecursoModel(
          item.id , item.nombre , item.descripcion ,
          item.tipoRecurso.id , item.idSolicitud,
          item.idProyecto, item.descripcionSolicitud ,
          item.estado  , item.nuevoAsignado
      );

      this._recursosService.setAuditorResurces(Recurso)
      .subscribe((result: any) => {
        const responsable = this.responsable.find((obj: any) => obj.id === item.nuevoAsignado);
      item.auditor =   new Auditor();
      item.auditor.id = responsable.id;
      item.auditor.apellidos = responsable.apellidos;
      item.auditor.nombres = responsable.nombres;
      item.auditor.rol = responsable.rol;
      item.auditor.usuario = responsable.usuario;
      item.enModificacion = false;
        console.log(result);
        swal.close();
      },
      (error) =>  {
        swal({
          type: 'error',
          title: 'Oops...',
          text: error
        });
      }
      );
    } else {
      swal('Seleccione un Responsable');
    }
    console.log('asignar');
  }

  close(item: any): void {
    item.enModificacion = false;
  }

  openModal( item: Iauditoria ) {

    this._recursosService.getResponsable(item.id)
    .subscribe((result: any) => {
      debugger;
      console.log(result);
    },
    (error) =>  {
      swal({
        type: 'error',
        title: 'Oops...',
        text: error
      });
    }
    );
    this.detalle = new DetalleRecursoModel(
          2,
          'nombre',
          'descripcion',
          2,
        2,
        2,
        'descripcionSolicitud',
          2,
        'auditor'
    );
    this.modalService.open(this.content);
  }
}
