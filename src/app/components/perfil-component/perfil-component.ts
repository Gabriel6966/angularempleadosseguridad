import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleados';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil-component',
  standalone: false,
  styleUrl: './perfil-component.css',
  templateUrl: './perfil-component.html',
})
export class PerfilComponent implements OnInit {
  public perfil!: Empleado;





  constructor(private _activateRoute: ActivatedRoute,private _cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe((params: Params)=>{

    })
  }
}
