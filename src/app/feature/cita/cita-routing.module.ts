import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CitaComponent } from './components/cita/cita.component';
import { ConsultarComponent } from './components/consultar/consultar.component';
import { AgendarComponent } from './components/agendar/agendar.component';
import { EditarComponent } from './components/editar/editar.component';

const routes: Routes = [
    {
        path: '',
        component: CitaComponent,
        children: [
            {
                path: 'consultar',
                component: ConsultarComponent
            },
            {
                path: 'agendar',
                component: AgendarComponent
            },
            {
                path: 'editar',
                component: EditarComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CitaRoutingModule { }