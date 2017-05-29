import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Usuario } from './usuarios/usuarios';

@Injectable()
export class UsuariosService {
  constructor(private http: Http) {
    console.log('Servicio de extraccion de Usuarios inicializado');
  }

  getUsusarios() {
    return this.http.get('http://localhost:5000/usuariosAdmin' )
      .map(response => <Usuario[]>response.json());
  }
}
