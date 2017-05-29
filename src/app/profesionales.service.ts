import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Profesionales } from './profesionales/profesionales';

@Injectable()
export class ProfesionalesService {

  constructor(private http: Http) { }

  getProfesionales() {
    return this.http.get('http://localhost:5000/profesionalesAdmin')
      .map(response => <Profesionales[]>response.json());
  }
}
