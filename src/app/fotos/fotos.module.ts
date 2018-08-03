import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FotoComponent } from './foto/foto.component';
import { FotoListComponent } from './foto-list/foto-list.component';
import { FotoFormComponent } from './foto-form/foto-form.component';


@NgModule({
    declarations: [ FotoComponent, FotoListComponent, FotoFormComponent ],
    imports: [ HttpClientModule, CommonModule ]
})
export class FotosModule {

}