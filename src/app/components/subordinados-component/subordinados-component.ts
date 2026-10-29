import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/service.empleados';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subordinados-component',
  standalone: false,
  styleUrl: './subordinados-component.css',
  templateUrl: './subordinados-component.html',
})
export class SubordinadosComponent implements OnInit {


  subordinados: any[] = [];

  constructor(
    private _cdr:ChangeDetectorRef, private _service:EmpleadosService, private _route:Router
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem("TOKEN") == null){
      this._route.navigate(['/login']);
    }else{
    this._service.getSubordinados().subscribe({
      next: (data) => {
        console.log(data);
        this.subordinados = data;
        this._cdr.detectChanges();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
}
