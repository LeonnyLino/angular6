import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Foto } from '../../foto';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit, OnChanges {

  @Input() fotos: Foto[] = [];
  rows = [];
  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    if(changes.fotos){
      
      this.rows = this.groupColumns(this.fotos);
    }

  }

  ngOnInit() {
  }

  groupColumns(fotos: Foto[]){
    const newRows = [];

    for(let i = 0; i < fotos.length; i+=3){
      newRows.push(fotos.slice(i, i + 3));
    }

    return newRows;
  }

}
