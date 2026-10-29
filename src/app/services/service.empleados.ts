import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Empleado } from "../models/empleados";
import { Observable } from "rxjs";
import { Login } from "../models/login";

@Injectable()

export class EmpleadosService{
    url = environment.apiEmpleados;

    constructor(private _http:HttpClient){

    }

    loginEmpleado(user: Login): Observable<any>{
      let json = JSON.stringify(user);
      let header = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.post(this.url + "Auth/Login", json, {headers: header});
    }


    //login(login: Object): Observable<any>{
    //    return this._http.post(this.url + "Auth/Login", login)
    //}

    getSubordinados(): Observable<Empleado[]>{
        let response = localStorage.getItem("TOKEN");
        let headers = new HttpHeaders().set("Authorization", "Bearer " + response);
        return this._http.get<Empleado[]>(this.url + "api/Empleados/Subordinados", {headers: headers});
    }

    getPerfilEmpleado(): Observable<Empleado>{
        let response = localStorage.getItem("TOKEN");
        let headers = new HttpHeaders().set("Authorization", "Bearer " + response);
        return this._http.get<Empleado>(this.url + "api/Empleados/perfilempleado", {headers: headers});
    }

}
