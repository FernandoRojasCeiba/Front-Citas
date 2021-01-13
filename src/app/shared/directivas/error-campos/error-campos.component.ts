import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-campos',
  templateUrl: './error-campos.component.html',
  styleUrls: ['./error-campos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorCamposComponent implements OnInit {

  mensajeError;
  ocultar = true;

  @Input()
  set text(value){
    if (value !== this.mensajeError){
      this.mensajeError = value;
      this.ocultar = !value;
      this.cdr.detectChanges();
    }
  }

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

}
