import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Misdatos } from "./../../_interfaces/misdatos.interface";
import { CambioContrasena } from "./../../_interfaces/misdatos.interface";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

import { User } from './../interfaces/user.model';

@Injectable()
export class AuthService {
  misdatos:any []=[];
  misdatosactualizados:any []=[];
  micontrasena:any []=[];

  constructor(private http: HttpClient, private _http: Http, private router: Router) { }

  check(): boolean {
    return localStorage.getItem('user') ? true : false;
  }

  login(credentials: { email: string, password: string }): Observable<boolean> {
    return this.http.post<any>(`${environment.api_url}/auth/login`, credentials)
    .do(data => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('datosUser',JSON.stringify(data.user));
      localStorage.setItem('iduser',JSON.stringify(data.user.idusuario));
      localStorage.setItem('user', btoa(JSON.stringify(data.user)));
    });
  }

  logout(): void {
    this.http.get(`${environment.api_url}/auth/logout`).subscribe(resp => {
      console.log(resp);
      localStorage.clear();
      this.router.navigate(['auth/login']);
    });
  }

  getUser(): User {
    return localStorage.getItem('user') ? JSON.parse(atob(localStorage.getItem('user'))) : null;
  }

  misDatos(iduser){
    console.log(iduser);
    return this._http.get(`${environment.api_url}/auth/getuser/${iduser}`,
      localStorage.getItem('token')
      ) .map(res=>{
        this.misdatos = res.json();
        return res.json();
      });
    }

    actualizarDatos(misdatos:Misdatos){
      console.log(misdatos);

      let body = JSON.stringify(misdatos);
      let headers = new Headers({
        'Content-Type':'application/json'
      });

      return this._http.post(`${environment.api_url}/auth/editme/`+misdatos.idusuario, body, {headers})
      .map(res=>{
        console.log(res.json());
        this.misdatosactualizados = res.json();
        return res.json();
      })
    }


    actualizarContrasena(cambiocontrasena:CambioContrasena){
      let body = JSON.stringify(cambiocontrasena);
      let headers = new Headers({
        'Content-Type':'application/json'
      });

      return this._http.post(`${environment.api_url}auth/cambiarcontrasena/{id}`, body, {headers})
      .map(res=>{
        this.micontrasena = res.json();
        return res.json();
      })


    }

    setUser(): Promise<boolean> {
      return this.http.get<any>(`${environment.api_url}/auth/me`).toPromise()
      .then(data => {
        if (data.user) {
          console.log(data.user);
          localStorage.setItem('iduser','hola');
          localStorage.setItem('user', btoa(JSON.stringify(data.user)));
          return true;
        }
        return false;
      });
    }

  }
