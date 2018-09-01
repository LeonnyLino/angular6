import { Pipe, PipeTransform } from '@angular/core';
import { Foto } from '../../foto';

@Pipe({name: 'filterByDescription'})
export class FilterByDescriptionPipe implements PipeTransform{
    
    transform(fotos: Foto[], descrioptionQuery: string) {
        descrioptionQuery = descrioptionQuery.trim().toLowerCase();

        if(descrioptionQuery){
            return fotos.filter(foto => 
                foto.description.toLowerCase().includes(descrioptionQuery)
            );
        }else {
            return fotos;
        }
    }

}