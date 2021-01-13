import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/feature/cita/shared/models/Cita';
import { CitaService } from 'src/app/feature/cita/shared/services/cita.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css']
})
export class AgendarComponent implements OnInit {

  cita: Cita = new Cita();
  errorMessage: ''

  constructor(private router: Router, private service: CitaService) { }

  ngOnInit(): void {
  }

  guardar(): void{
    this.service.createCita(this.cita)
    .subscribe(data => {
      Swal.fire(
        'Proceso Éxitoso!',
        'La cita fue agendada con éxito',
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
