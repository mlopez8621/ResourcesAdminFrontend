import { Component, OnInit } from '@angular/core';
import { Recurso_controlcalidad } from "./recurso_controlcalidad";
import { Recursos_controlcalidadServicio} from "./recurso-controlcalidad.service";

@Component({
  selector: 'app-recurso-controlcalidad',
  templateUrl: './recurso-controlcalidad.component.html',
  styleUrls: ['./recurso-controlcalidad.component.css']
})
export class RecursoControlcalidadComponent implements OnInit {

  constructor(private recursocontrolcalidadService : Recursos_controlcalidadServicio) {}
  recursocontrolcalidad: Recurso_controlcalidad[];
  selected : any;
  

  ngOnInit() {
    this.getListRecurso_controlcalidad();
  }
  
  getListRecurso_controlcalidad():void{
    this.recursocontrolcalidadService.getAll().subscribe( (recursocontrolcalidad:any) => this.recursocontrolcalidad = recursocontrolcalidad.results )
  }

}
