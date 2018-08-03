import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { FotoListComponent } from './fotos/foto-list/foto-list.component';
import { FotoFormComponent } from './fotos/foto-form/foto-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
    { path: 'user/:userName', component: FotoListComponent},
    { path: 'add/lino', component: FotoFormComponent},
    { path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}