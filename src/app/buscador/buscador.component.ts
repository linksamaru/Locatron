import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  profesiones=[
  	{nombre:"Oculista",val:"1"},
  	{nombre:"Dentista",val:"2"}
  ];
}
