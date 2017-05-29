import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalendarioComponent } from '../calendario/calendario.component';
import { BuscadorComponent } from '../buscador/buscador.component';
import { CitaComponent } from '../cita/cita.component';
import { ListadoComponent } from '../listado/listado.component';
import { PageNotFoundComponent } from '../pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  { path: '',           component: BuscadorComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'cita',   component: CitaComponent },
  { path: 'listado',    component: ListadoComponent},
  { path: '**',         component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
