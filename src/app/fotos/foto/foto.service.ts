import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Foto } from '../foto';

const API = 'http://localhost:3000'
@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor(private http: HttpClient) { }

  listFormUser(userName: string){
    return this.http.get<Foto[]>(API + '/' + userName + '/photos');
  }
}
