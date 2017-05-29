import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  prof={
  	nombre:"Ana Maria",
  	localidad:"Madrid",
  	dia:"2-mayo-2017",
  	hora:"12:30"
  };
}
