import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { environment } from '../environments/environment';

const isProd = !environment.dev;

export const routes: Routes = [
    {path: '', component: HomeComponent, data: {title: 'home', hide: isProd}},
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
