import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { Cita } from '../models/Cita';
import { catchError } from 'rxjs/operators'
import { Observable, throwError as observableThrowError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private http: HttpClient) { }

  errorHandler(error: HttpErrorResponse): Observable<any>{
    if (error.status === 400){
      return observableThrowError('No se puede agendar cita los días sabádos o domingo')
    } else{
      return observableThrowError('Todos los campos del formulario son requeridos')
    }
  }
  getCitas(): Observable<any>{
    return this.http.get<Cita[]>(`${environment.endpoint}`);
  }
  createCita(cita: Cita): Observable<any>{
    return this.http.post<Cita>(`${environment.endpoint}`, cita)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  getCitasId(id: number): Observable<any>{
    return this.http.get<Cita>(`${environment.endpoint}/paciente/` + id);
  }
  updateCita(cita: Cita): Observable<any>{
    return this.http.put<Cita>(`${environment.endpoint}/${cita.id}`, cita)
    .pipe(
      catchError(this.errorHandler)
    );
  }
  removeCita(cita: Cita): Observable<any>{
    return this.http.delete<Cita>(`${environment.endpoint}/${cita.id}`);
  }
}
