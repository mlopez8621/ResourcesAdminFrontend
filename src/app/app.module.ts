import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FasesComponent } from './fases/fases.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './landing/landing.component';
import { RecursosComponent } from './recursos/recursos.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrearComponent } from './crear/crear.component';
import { ErrorComponent } from './error/error.component';
import { CoreModule } from './core/core.module';
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
    CrearComponent,
    ErrorComponent,
    ReasignacionComponent,
    ResponsableComponent
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
  ],
  providers: [FasesService,RecursosServicio,ReasignacionService,ResponsableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
