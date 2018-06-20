import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MapsComponent } from './components/maps/maps.component';


const ROUTES: Routes = [
    { path: 'home', component: MapsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },


];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
