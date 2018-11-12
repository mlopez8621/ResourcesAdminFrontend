import { Component, OnInit } from '@angular/core';
import { Recursos } from '../recursos/recursos';
import swal from 'sweetalert2';
import { RecursosServicio } from '../core/services/recursos.service';


@Component({
  selector: 'app-lista-recursos',
  templateUrl: './lista-recursos.component.html',
  styleUrls: ['./lista-recursos.component.css']
})
export class ListaRecursosComponent implements OnInit {
  recursos: Recursos[];
  selectedRec: Recursos;
  onSelect(rec: Recursos): void {
    this.selectedRec = rec;
  }
  constructor(private recursosService: RecursosServicio) { }

  ngOnInit() {
    this.getListRecursos()
  }


  getListRecursos(): void {
    swal.showLoading();
    this.recursosService.getAll()
      .subscribe((recursos: any) => {
      this.recursos = recursos.results;
        swal.hideLoading();
      });
  }

}
