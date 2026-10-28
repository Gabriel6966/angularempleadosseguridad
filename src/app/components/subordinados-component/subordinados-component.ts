import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/service.empleados';

@Component({
  selector: 'app-subordinados-component',
  standalone: false,
  styleUrl: './subordinados-component.css',
  templateUrl: './subordinados-component.html',
})
export class SubordinadosComponent implements OnInit {


  subordinados: any[] = [];

  constructor(
    private _cdr:ChangeDetectorRef, private _service:EmpleadosService 
  ) { }

  ngOnInit(): void {
    this._service.getSubordinados().subscribe({
      next: (data) => {
        console.log(data);
        this.subordinados = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
