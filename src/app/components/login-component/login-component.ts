import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { EmpleadosService } from '../../services/service.empleados';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent implements OnInit {


  @ViewChild("cajauser") cajauser!: ElementRef;
  @ViewChild("cajacontrasena") cajacontrasena!: ElementRef;




  constructor(private _cdr: ChangeDetectorRef,
    private _service: EmpleadosService,
    private _router: Router) { }


  login() {
    this._service.loginEmpleado({
      userName: this.cajauser.nativeElement.value,
      password: this.cajacontrasena.nativeElement.value
    }).subscribe((data) => {
      console.log(data);
      localStorage.setItem("TOKEN", data.response);
      this._router.navigate(["/perfil"]);
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit(): void {


  }

}
