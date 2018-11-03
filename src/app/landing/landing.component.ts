import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [NgbCarouselConfig]
})
export class LandingComponent implements OnInit {
  constructor(config: NgbCarouselConfig) {
     // todas las configuraciones
     config.interval = 2000;
    //  config.wrap = false;
    //  config.keyboard = false;
    //  config.pauseOnHover = false;

  }
  ngOnInit() {

  }

}
