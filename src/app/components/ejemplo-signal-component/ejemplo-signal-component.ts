import { Component, computed, inject, signal } from '@angular/core';
import { ServiceSignal } from '../../services/service.signal';

@Component({
  selector: 'app-ejemplo-signal-component',
  standalone: false,
  styleUrl: './ejemplo-signal-component.css',
  templateUrl: './ejemplo-signal-component.html',
})
export class EjemploSignalComponent {
  private _ServiceSignal : ServiceSignal= inject(ServiceSignal);


  public contador = this._ServiceSignal.contador;
  public triple = this._ServiceSignal.triple;


  reiniciarContador(): void {
    this._ServiceSignal.reiniciarContador();
  }

  incremetarContador(): void {
    this._ServiceSignal.incremetarContador();
  }
}
