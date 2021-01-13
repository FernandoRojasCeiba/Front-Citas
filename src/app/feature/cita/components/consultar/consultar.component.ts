import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/feature/cita/shared/models/Cita';
import {CitaService} from 'src/app/feature/cita/shared/services/cita.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  citas: Cita[];

  constructor(private service: CitaService, private router: Router) { }

  ngOnInit(): void {
    this.service.getCitas()
    .subscribe(data => {
      this.citas = data;
    })
  }

  editar(cita: Cita): void{
    localStorage.setItem('id', cita.id.toString());
    this.router.navigate(['editar']);
  }
  eliminar(cita: Cita): void{
    this.service.removeCita(cita)
    .subscribe(data => {
      this.citas = this.citas.filter(c => c !== cita);
      Swal.fire(
        'Proceso Éxitoso!',
        'Cita eliminada con éxito',
        'success'
      )
    })
    this.router.navigate(['consultar']);
  }
}