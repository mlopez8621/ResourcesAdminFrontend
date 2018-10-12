import { Component, OnInit } from '@angular/core';
import { ReasignacionService } from "./reasignacion.services";
import { Reasignacion } from "./reasignacion";


@Component({
  selector: 'app-reasignacion',
  templateUrl: './reasignacion.component.html',
  styleUrls: ['./reasignacion.component.css']
})
export class ReasignacionComponent implements OnInit {

  constructor(private reasignacionService: ReasignacionService) { }
  reasignacion: Reasignacion[];
  selected : any;
  ngOnInit() {
    this.getListReasignacion();
  }

  getResources():void{
      alert(this.selected)
  }


  getListReasignacion():void{
    this.reasignacionService.getAllPhases().subscribe((reasignacion:any) => this.reasignacion = reasignacion.results);
  }
}

