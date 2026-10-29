import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-ejemplo-signal-component',
  standalone: false,
  styleUrl: './ejemplo-signal-component.css',
  templateUrl: './ejemplo-signal-component.html',
})
export class EjemploSignalComponent {
  public contador = signal(23);

  public triple = computed(() => {
    return this.contador() * 3;
  });

  reiniciarContador(): void {
    this.contador.set(0);
  }

  incremetarContador(): void {
    this.contador.update((value) => value + 1);
  }
}
