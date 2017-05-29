import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  // private mes: string[];

  constructor() {
    // this.mes = ['L', 'M', 'X', 'J', 'V', 'S', 'D', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
    //  '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    // console.log(this.mes[0]);
  }

  ngOnInit() {
  }
}
