import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FasesComponent } from './fases/fases.component';
import { ReasignacionComponent } from './reasignacion/reasignacion.component';
import { ResponsableComponent } from './responsable/responsable.component';
import { LandingComponent } from './landing/landing.component';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './crear/crear.component';
import { GestioncalidadComponent } from './gestioncalidad/gestioncalidad.component';
import { ListaRecursosComponent } from './lista-recursos/lista-recursos.component';
import { RecursoControlcalidadComponent } from './recurso-controlcalidad/recurso-controlcalidad.component';


const appRoutes: Routes = [
    { path: 'fases', component: FasesComponent},
    { path: 'crear', component: CrearComponent},
    { path: 'gestioncalidad', component: GestioncalidadComponent},
    { path: 'reasignacion', component: ReasignacionComponent},
    { path: 'responsable', component: ResponsableComponent},
    { path: 'lista-recursos', component: ListaRecursosComponent},
    { path: 'recursos-controlcalidad', component: RecursoControlcalidadComponent},
    { path:'**', component:LandingComponent}
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {
}
