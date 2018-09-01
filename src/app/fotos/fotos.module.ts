import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FotoComponent } from './foto/foto.component';
import { FotoListComponent } from './foto-list/foto-list.component';
import { FotoFormComponent } from './foto-form/foto-form.component';
import { FotosComponent } from './foto-list/fotos/fotos.component';
import { FilterByDescriptionPipe } from './foto-list/fotos/filter-by-description.pipe';
import { LoadButtonComponent } from './foto-list/load-button/load-button.component';


@NgModule({
    declarations: [ FotoComponent, 
        FotoListComponent, 
        FotoFormComponent, 
        FotosComponent,
        FilterByDescriptionPipe,
        LoadButtonComponent ],
    imports: [ HttpClientModule, CommonModule ]
})
export class FotosModule {

}