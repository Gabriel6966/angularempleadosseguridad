import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ServiceSignal } from '../../services/service.signal';
import { ServiceAuthEmpleados } from '../../services/service.auth.empleados';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {




  constructor(private _cdr: ChangeDetectorRef) { }

  private _ServiceSignal : ServiceSignal= inject(ServiceSignal);
  private _serviceAuth: ServiceAuthEmpleados = inject(ServiceAuthEmpleados);
  public contador = this._ServiceSignal.contador;

  public usuario = this._serviceAuth.user;

  logOutEmpleado(): void{
    localStorage.removeItem("TOKEN");
    this._cdr.detectChanges();
  }
}
