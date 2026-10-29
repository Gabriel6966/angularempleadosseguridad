import { Injectable } from '@angular/core';
import { computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceSignal {
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
