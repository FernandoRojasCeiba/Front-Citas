import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/feature/cita/shared/models/Cita';
import { CitaService } from 'src/app/feature/cita/shared/services/cita.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  cita: Cita = new Cita();
  errorMessage: ''
  constructor(private router: Router, private service: CitaService) { }

  ngOnInit(): void {
    this.editar();
  }

  editar(): void{
    const id = localStorage.getItem('id');
    this.service.getCitasId(parseInt(id, 10))
    .subscribe(data => {
      this.cita = data;
    })
  }

  actualizar(cita: Cita): void{
    this.service.updateCita(cita)
    .subscribe(data => {
      this.cita = data;
      Swal.fire(
        'Proceso Éxitoso!',
        'La fecha de la cita se modificó correctamente',
        'success'
      )
      this.router.navigate(['consultar']);
    }, error => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: this.errorMessage = error
      })
    })
  }
}
