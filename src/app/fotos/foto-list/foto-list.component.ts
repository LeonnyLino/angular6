import { Component, OnInit } from '@angular/core';
import { FotoService } from '../foto/foto.service';
import { ActivatedRoute } from '@angular/router';
import { Foto } from '../foto';

@Component({
  selector: 'app-foto-list',
  templateUrl: './foto-list.component.html',
  styleUrls: ['./foto-list.component.css']
})
export class FotoListComponent implements OnInit {

  fotos: Foto[] = [];

  constructor(private fotoService: FotoService, private activatedRoute: ActivatedRoute){
    
  }
  
  
  ngOnInit() {

    const userName = this.activatedRoute
    .snapshot
    .params
    .userName;

    this.fotoService.listFormUser(userName).subscribe(
      fotos => {
        console.log(fotos[0].description);
        this.fotos = fotos
      }
    );
  }

}
