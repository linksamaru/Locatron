import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Profesiones } from './profesiones/profesiones';

@Injectable()
export class ProfesionesService {

  constructor(private http: Http) { }

  getProfesiones() {
    return this.http.get('http://localhost:30000/profesiones')
      .map(response => <Profesiones[]>response.json());
  }
}
