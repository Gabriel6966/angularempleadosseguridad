import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleados';
import { ActivatedRoute } from '@angular/router';
import { EmpleadosService } from '../../services/service.empleados';

@Component({
  selector: 'app-perfil-component',
  standalone: false,
  styleUrl: './perfil-component.css',
  templateUrl: './perfil-component.html',
})
export class PerfilComponent implements OnInit {
  public perfil!: Empleado;

  constructor(
    private _activateRoute: ActivatedRoute,
    private _cdr: ChangeDetectorRef,
    private _service: EmpleadosService,
  ) {}

  ngOnInit(): void {
    this._service.getPerfilEmpleado().subscribe(
      (data) => {
        this.perfil = data;
        console.log(this.perfil);
        this._cdr.detectChanges();
      },
      (error) => {
        console.log(error);
      },
    );
  }
}
