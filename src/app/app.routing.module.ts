import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { FotoListComponent } from './fotos/foto-list/foto-list.component';
import { FotoFormComponent } from './fotos/foto-form/foto-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { FotoListResolver } from './fotos/foto-list/foto-list.resolver';

const routes: Routes = [
    {   
        path: 'user/:userName', 
        component: FotoListComponent,
        resolve: {
            fotos: FotoListResolver
        }
    },
    { path: 'add/lino', component: FotoFormComponent},
    { path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}