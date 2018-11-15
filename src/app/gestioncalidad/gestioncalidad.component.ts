import { Component, OnInit } from '@angular/core';
import { RecursosServicio } from '../core/services/recursos.service';
import { Recursos } from '../recursos/recursos';
import swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IComentarios } from '../interfaces/comentario.interface';
import { CrearService } from '../core/services/crear.service';
import { ComentarioModel } from '../models/comentario.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-gestioncalidad',
  templateUrl: './gestioncalidad.component.html',
  styleUrls: ['./gestioncalidad.component.css']
})

export class GestioncalidadComponent implements OnInit {
  recursos: Recursos[];
  estado: string;
  comentario: IComentarios [];
  isCollapsed = false;
  CrearComment: ComentarioModel = null;

  constructor(
    private recursosService: RecursosServicio,
    private crearService: CrearService,
    private modalService: NgbModal
    ) {
    this.estado = '4';
  }

  ngOnInit() {
    swal.showLoading();
    this.recursosService.getResourcesFiltered(this.estado)
    .subscribe((recursos: any) => { this.recursos = recursos.results;
      swal.close();
    });
  }


  verComentarios(id , content): void {
    swal.showLoading();
      this.recursosService.getCommentsById(1)
       .subscribe((recursos: any) => {
         this.comentario = recursos.results;
         
           swal.close();
          this.openModal(content);
      });
  }

  enviarComentario(id): void {
    swal.showLoading();
    const recursoComentario = this.recursos.find(recurso => recurso.id == id);
    var datePipe = new DatePipe("en_US");
    var today = datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.CrearComment = new ComentarioModel(recursoComentario.id, recursoComentario.comentario, 1, recursoComentario.comentario, today, "Creado");
    recursoComentario.comentario = "";
     this.crearService.addComment(this.CrearComment).subscribe(
        respon => {
         console.log(respon); // validar la respuesta
         swal(
           'OK!',
           'Comentario Creado Exitosamente',
           'success'
         );
      },
      err => {
       console.log(err); // cuando hay error
       swal(
         'ERROR!',
         'Error creando comentario',
         'error'
       );
      } );
  }

  openModal(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop', backdrop : 'static'});
  }



}
