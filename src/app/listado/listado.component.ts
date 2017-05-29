import { Component, OnInit} from '@angular/core';
import {Profesionales} from '../profesionales/profesionales';
import {ProfesionalesService} from '../profesionales.service';

@Component({
  selector: 'listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  providers: [ProfesionalesService]
})

export class ListadoComponent implements OnInit {
  private prof: Profesionales[];
  profesional= {
    profesion: 'oculista',
    localidad: 'Salamanca'
  };
  constructor(private profesionalesService: ProfesionalesService) { }

  ngOnInit() {
    this.profesionalesService.getProfesionales().subscribe(profesionales => this.prof = profesionales);
  }
}
