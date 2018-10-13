import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Recursos } from './recursos';

import swal from 'sweetalert2';
import { RecursosServicio } from '../core/services/recursos.service';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css']
})


export class RecursosComponent implements OnInit, OnChanges {
recursos: Recursos[];
@Input() estado: any;

  constructor(private recursosService: RecursosServicio) { }

  ngOnInit() {

  }

  ngOnChanges() {

    this.getListRecursos();
  }

  getListRecursos(): void {
    swal.showLoading();
    this.recursosService.getResourcesFiltered(this.estado)
    .subscribe((recursos: any) => { this.recursos = recursos.results;
      swal.hideLoading(); });
  }

}
