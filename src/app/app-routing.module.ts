import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FasesComponent } from './fases/fases.component';
import { LandingComponent } from './landing/landing.component';

const appRoutes: Routes = [
    { path: 'fases', component: FasesComponent},
    { path:'**', component:LandingComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});