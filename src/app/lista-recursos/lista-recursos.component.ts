import { Component, OnInit } from '@angular/core';
import { Recursos } from '../recursos/recursos';
import swal from 'sweetalert2';
import { RecursosServicio } from '../core/services/recursos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IRecursoIntermedio } from '../interfaces/recursoIntermedio.interface';


@Component({
  selector: 'app-lista-recursos',
  templateUrl: './lista-recursos.component.html',
  styleUrls: ['./lista-recursos.component.css']
})
export class ListaRecursosComponent implements OnInit {
  recursos: Recursos[];
  selectedRec: Recursos;
  recursoIntermedio: IRecursoIntermedio [];
  onSelect(rec: Recursos): void {
    this.selectedRec = rec;
  }
  constructor(private recursosService: RecursosServicio,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.getListRecursos();
  }


  getListRecursos(): void {
    swal.showLoading();
    this.recursosService.getAll()
      .subscribe((recursos: any) => {
      this.recursos = recursos.results;
        swal.hideLoading();
      });
  }

  verRecursoIntermedio(id , content): void {
    swal.showLoading();
    this.recursosService.getRecursoIntermedioById(id)
      .subscribe((recursos: any) => {
        this.recursoIntermedio = recursos.results;

          swal.close();
          this.openModal(content);
      });
  }

  openModal(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop', backdrop : 'static'});
  }

}
