import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FotoService } from './fotos/foto/foto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fotos: object[] = [];

  constructor(fotoService: FotoService){
    
    fotoService.listFormUser('leonny').subscribe(
      fotos => {
        console.log(fotos[0].description);
        this.fotos = fotos
      }
    );
  }

}
