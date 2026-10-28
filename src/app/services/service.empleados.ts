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

    getSubordinados(): Observable<Empleado[]>{
        let token = localStorage.getItem("token");
        let headers = new HttpHeaders().set("Authorization", "Bearer " + token);
        return this._http.get<Empleado[]>(this.url + "api/Empleados/Subordinados", {headers: headers});
    }


}