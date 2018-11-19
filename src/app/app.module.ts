import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FasesComponent } from './fases/fases.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './landing/landing.component';
import { RecursosComponent } from './recursos/recursos.component';
import { CrearComponent } from './crear/crear.component';
import { ErrorComponent } from './error/error.component';
import { CoreModule } from './core/core.module';
import { GestioncalidadComponent } from './gestioncalidad/gestioncalidad.component';
import { ReasignacionComponent } from './reasignacion/reasignacion.component';
import { ReasignacionService} from './reasignacion/reasignacion.services';
import { FasesService} from './fases/fases.service';
import { RecursosServicio} from './recursos/recursos.service';
import { ResponsableComponent } from './responsable/responsable.component';
import { ResponsableService} from './responsable/responsable.services';
import { SelectListComponent } from './select-list/select-list.component';
import { ListaRecursosComponent } from './lista-recursos/lista-recursos.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { RecursoControlcalidadComponent } from './recurso-controlcalidad/recurso-controlcalidad.component';
import { Recursos_controlcalidadServicio } from './recurso-controlcalidad/recurso-controlcalidad.service';
import { DiligenciarChecksComponent } from './diligenciar-checks/diligenciar-checks.component';
import { SelectListCcComponent } from './select-list-cc/select-list-cc.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LandingComponent,
    FasesComponent,
    RecursosComponent,
    CrearComponent,
    ErrorComponent,
    GestioncalidadComponent,
    ReasignacionComponent,
    ResponsableComponent,
    ListaRecursosComponent,
    SelectListComponent,
    RecursoControlcalidadComponent,
    DiligenciarChecksComponent,
    SelectListCcComponent
  ],
  exports: [RecursosComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule.forRoot(),
    AccordionModule.forRoot(),
    NgbModule
  ],

  providers: [FasesService, RecursosServicio, ReasignacionService, ResponsableService, Recursos_controlcalidadServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
