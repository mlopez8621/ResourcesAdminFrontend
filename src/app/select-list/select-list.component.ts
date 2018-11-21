import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ResponsableService } from '../responsable/responsable.services';
import { Responsable } from '../responsable/responsable';
import { ReasignacionService } from '../reasignacion/reasignacion.services';

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.css'],
  providers: [ReasignacionService]
})
export class SelectListComponent implements OnInit {

  constructor(private responsableService: ResponsableService) { }
  responsable: Responsable[];
  selected: any;
  @Output() Responsable = new EventEmitter();

  ngOnInit() {
    this.getListResponsable();
  }

  
  getListResponsable():void{
    this.responsableService.getAllPhases().subscribe((responsable:any) => this.responsable = responsable.results);
  }

  onChange(value) {
    console.log(value)
    this.Responsable.emit(value);

}

}
