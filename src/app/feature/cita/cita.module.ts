import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CitaRoutingModule } from './cita-routing.module';
import { AgendarComponent } from './components/agendar/agendar.component';
import { CitaComponent } from './components/cita/cita.component';
import { ConsultarComponent } from './components/consultar/consultar.component';
import { EditarComponent } from './components/editar/editar.component';
import { CitaService } from './shared/services/cita.service';

@NgModule({
    declarations: [
        AgendarComponent,
        ConsultarComponent,
        EditarComponent,
        CitaComponent
    ],
    imports: [
        BrowserModule,
        CitaRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        CitaService
    ]
})
export class CitaModule {}