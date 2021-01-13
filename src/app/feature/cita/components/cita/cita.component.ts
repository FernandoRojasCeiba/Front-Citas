import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  consultar(): void{
    this.router.navigate(['consultar']);
  }

  agendar(): void{
    this.router.navigate(['agendar']);
  }

}
