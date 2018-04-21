import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Pedido } from "./../_interfaces/pedido.interface";
import { Producto } from "./../_interfaces/pedido.interface";

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class MisPedidosservice {
	mispedidos:any []=[];
  respuestapost:any[]=[];
	
	constructor(private http: HttpClient, private _http: Http, private router: Router) { }

	getPedidos(idusuario){
		console.log("desde el servicio");
	  console.log(localStorage.getItem('iduser'));

	  console.log(idusuario);
    return this._http.get(`${environment.api_url}/pedidos/${idusuario}`,
      ) .map(res=>{
        this.mispedidos = res.json();
        console.log(this.mispedidos);
        console.log("viene el pedido");
        console.log(this.mispedidos);
        return res.json();
      });
  }


    postPedidos(mipedido:Pedido){
      console.log("viene");
      console.log(mipedido);

      let body = JSON.stringify(mipedido);
      let headers = new Headers({
        'Content-Type':'application/json'
      });


      return this._http.post(`${environment.api_url}/auth/ingresarpedido2`, body, {headers})
      .map(res=>{
        console.log("respuesta");
        console.log(res.json());
        this.respuestapost = res.json();
        return res.json();
      })
    }

}




