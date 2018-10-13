import { Component, OnInit } from '@angular/core';
import { ReasignacionService } from "./reasignacion.services";
import { Reasignacion } from "./reasignacion";
import { ResponsablemService } from "../responsablem/responsablem.services";
import { Responsablem } from "../responsablem/responsablem";


@Component({
  selector: 'app-reasignacion',
  templateUrl: './reasignacion.component.html',
  styleUrls: ['./reasignacion.component.css']
})
export class ReasignacionComponent implements OnInit {

  constructor(private reasignacionService: ReasignacionService,private responsablemService: ResponsablemService) { }
  reasignacion: Reasignacion[];
  responsablem: Responsablem[];
  selected : any;
  ngOnInit() {
    this.getListReasignacion();
    this.getListResponsablem();
  }

  getResources():void{
      alert(this.selected)
  }


  getListReasignacion():void{
    this.reasignacionService.getAllPhases().subscribe((reasignacion:any) => this.reasignacion = reasignacion.results);
  }

  getListResponsablem():void{
    this.responsablemService.getAllPhases().subscribe((responsablem:any) => this.responsablem = responsablem.results);
  }
}

