import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {



  constructor(private _cdr: ChangeDetectorRef) { }


  logOutEmpleado(): void{
    localStorage.removeItem("TOKEN");
    this._cdr.detectChanges();
  }
}
