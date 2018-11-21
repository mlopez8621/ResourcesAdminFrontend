import { Component, OnInit } from '@angular/core';
import { ResponsableService } from "./responsable.services";
import { Responsable } from "./responsable";


@Component({
  selector: 'app-responsable',
  templateUrl: './responsable.component.html',
  styleUrls: ['./responsable.component.css']
})
export class ResponsableComponent implements OnInit {

  constructor(private responsableService: ResponsableService) { }
  responsable: Responsable[];
  selected : any;
  ngOnInit() {
    this.getListResponsable();
    this.getResponsable();
  }

  getResources():void{
      alert(this.selected)
  }


  getListResponsable():void{
    this.responsableService.getAllPhases().subscribe((responsable:any) => this.responsable = responsable.results);
  }

  getResponsable():void{
    this.responsableService.getOneResponsable().subscribe((responsable:any) => this.responsable = responsable.results);
  }
}

