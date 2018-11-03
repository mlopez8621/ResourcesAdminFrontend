import { Component, OnInit } from '@angular/core';
import { RecursosServicio } from '../core/services/recursos.service';
import { Recursos } from '../recursos/recursos';
import swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IComentarios } from '../interfaces/comentario.interface';

@Component({
  selector: 'app-gestioncalidad',
  templateUrl: './gestioncalidad.component.html',
  styleUrls: ['./gestioncalidad.component.css']
})
export class GestioncalidadComponent implements OnInit {
  recursos: Recursos[];
  estado: string;
  comentario: IComentarios [];
  constructor(
    private recursosService: RecursosServicio,
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

  openModal(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop', backdrop : 'static'});
  }



}
