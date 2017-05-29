import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { Usuario } from '../usuarios/usuarios';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ UsuariosService ]
})
export class HeaderComponent implements OnInit {
  private usuarios: Usuario[];
  ngOnInit() {
    this.usuarioServ.getUsusarios().subscribe( usuarios => this.usuarios = usuarios);
    setTimeout(2000);
  }
  constructor(public snackBar: MdSnackBar, private router: Router, private usuarioServ: UsuariosService) {
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  comprobarCredenciales(pass: string, user: string) {
    const usuario = this.usuarios.filter(x => x.usuario === user).filter(y => y.password === pass);
    if (usuario) {
      this.router.navigateByUrl('/calendario');
    } else {
      this.openSnackBar('Usuario o contraseña incorrectos', 'Aceptar');
    }
    console.log(user + ' ' + pass);
   }
}
