import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ServiceSignal } from '../../services/service.signal';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {




  constructor(private _cdr: ChangeDetectorRef) { }

  private _ServiceSignal : ServiceSignal= inject(ServiceSignal);
  public contador = this._ServiceSignal.contador;


  logOutEmpleado(): void{
    localStorage.removeItem("TOKEN");
    this._cdr.detectChanges();
  }
}
