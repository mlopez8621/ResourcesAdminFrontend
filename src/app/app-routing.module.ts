import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FasesComponent } from './fases/fases.component';
import { LandingComponent } from './landing/landing.component';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './crear/crear.component';

const appRoutes: Routes = [
    { path: 'fases', component: FasesComponent},
    { path: 'crear', component: CrearComponent},
    { path: '**', component: LandingComponent}
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
