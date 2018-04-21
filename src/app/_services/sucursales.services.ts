import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class Sucursalesservice {
	sucursales:any []=[];
	
	constructor(private http: HttpClient, private _http: Http, private router: Router) { }

	getSucursales(){
    return this._http.get(`${environment.api_url}/sucursales`,
      ) .map(res=>{
        this.sucursales = res.json();
        console.log(this.sucursales);
        return res.json();
      });
  }
}




