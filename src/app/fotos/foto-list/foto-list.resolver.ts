import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs';

import { FotoService } from './../foto/foto.service';
import { Foto } from '../foto';

@Injectable({ providedIn: 'root'})
export class FotoListResolver implements Resolve<Observable<Foto[]>>{

    constructor(private service: FotoService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const userName = route.params.userName;

        return this.service.listFromUserPaginated(userName, 1);
    }

}