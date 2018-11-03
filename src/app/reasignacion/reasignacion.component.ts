import { Component, OnInit } from '@angular/core';
import { ReasignacionService } from "./reasignacion.services";
import { Reasignacion } from "./reasignacion";
import { ResponsableService } from "../responsable/responsable.services";
import { Responsable } from "../responsable/responsable";


@Component({
  selector: 'app-reasignacion',
  templateUrl: './reasignacion.component.html',
  styleUrls: ['./reasignacion.component.css']
})
export class ReasignacionComponent implements OnInit {

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
}

