import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Empleado } from "../models/empleados";
import { Observable } from "rxjs";

@Injectable()

export class EmpleadosService{
    url = environment.apiEmpleados;

    constructor(private _http:HttpClient){

    }

    login(login: Object): Observable<any>{
        return this._http.post(this.url + "Auth/Login", login)
    }


}