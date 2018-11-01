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
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LandingComponent,
    FasesComponent,
    RecursosComponent,
    CrearComponent,
    ErrorComponent
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
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
