import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule,
         MdGridListModule,
         MdButtonModule,
         MdCheckboxModule,
         MdButtonToggleModule,
         MdToolbarModule,
         MdIconModule,
         MdSelectModule,
         MdSliderModule,
         MdTooltipModule,
         MdProgressSpinnerModule,
         MdCardModule,
         MdListModule,
         MdSnackBarModule} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './approuting/approuting.module';
import { CalendarioComponent } from './calendario/calendario.component';
import { HeaderComponent } from './header/header.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { CitaComponent } from './cita/cita.component';
import { ListadoComponent } from './listado/listado.component';
import { RegistroComponent } from './registro/registro.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { UsuariosService } from './usuarios.service';


@NgModule({
  declarations: [
    AppComponent,
    CalendarioComponent,
    HeaderComponent,
    BuscadorComponent,
    CitaComponent,
    ListadoComponent,
    RegistroComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    MdInputModule,
    MdGridListModule,
    MdButtonModule,
    MdCheckboxModule,
    MdButtonToggleModule,
    MdToolbarModule,
    MdIconModule,
    MdSelectModule,
    MdSliderModule,
    MdTooltipModule,
    MdProgressSpinnerModule,
    MdCardModule,
    MdListModule,
    MdSnackBarModule
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
