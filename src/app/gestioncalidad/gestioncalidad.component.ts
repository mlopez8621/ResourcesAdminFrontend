import { Component, OnInit } from '@angular/core';
import { RecursosServicio } from '../core/services/recursos.service';
import { Recursos } from '../recursos/recursos';
import swal from 'sweetalert2';

@Component({
  selector: 'app-gestioncalidad',
  templateUrl: './gestioncalidad.component.html',
  styleUrls: ['./gestioncalidad.component.css']
})
export class GestioncalidadComponent implements OnInit {
  recursos: Recursos[];
  estado: string;
  constructor(private recursosService: RecursosServicio) {
    this.estado = '4';
  }

  ngOnInit() {
    swal.showLoading();
    this.recursosService.getResourcesFiltered(this.estado)
    .subscribe((recursos: any) => { this.recursos = recursos.results;
      swal.hideLoading(); });
  }

}
