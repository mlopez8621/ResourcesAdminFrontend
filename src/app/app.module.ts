import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FasesComponent } from './fases/fases.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './landing/landing.component';
import { FasesService } from './fases/fases.service';
import { RecursosServicio } from './recursos/recursos.service';
import { RecursosComponent } from './recursos/recursos.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReasignacionComponent } from './reasignacion/reasignacion.component';
import { ReasignacionService} from "./reasignacion/reasignacion.services";
import { ResponsableComponent } from './responsable/responsable.component';
import { ResponsableService} from "./responsable/responsable.services";
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LandingComponent,
    FasesComponent,
    RecursosComponent,
    ReasignacionComponent,
    ResponsableComponent

  ],
  exports: [RecursosComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [FasesService,RecursosServicio,ReasignacionService,ResponsableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
