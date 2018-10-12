import { Component, OnInit } from '@angular/core';
import { ResponsablemService } from "./responsablem.services";
import { Responsablem } from "./responsablem";


@Component({
  selector: 'app-responsablem',
  templateUrl: './responsablem.component.html',
  styleUrls: ['./responsablem.component.css']
})
export class ResponsablemComponent implements OnInit {

  constructor(private responsablemService: ResponsablemService) { }
  responsablem: Responsablem[];
  selected : any;
  ngOnInit() {
    this.getListResponsablem();
  }

  getResources():void{
      alert(this.selected)
  }


  getListResponsablem():void{
    this.responsablemService.getAllPhases().subscribe((responsablem:any) => this.responsablem = responsablem.results);
  }
}

