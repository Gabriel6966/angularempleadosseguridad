import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { Empleado } from '../models/empleados';
import { Observable } from 'rxjs';
import { EmpleadosService } from './service.empleados';

@Injectable({
  providedIn: 'root',
})
export class ServiceAuthEmpleados {
  constructor(private _service: EmpleadosService) {}

  public user = signal<Empleado | null>(null);

  loginEmpleadoSignal(token: string): Observable<Empleado> {
    localStorage.setItem('TOKEN', token);
    return this._service.getPerfilEmpleado();
  }

  logOutEmpleadoSignal(): void {
    localStorage.removeItem('TOKEN');
    this.user.set(null);
  }
}
