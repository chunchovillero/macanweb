import { Component, OnInit } from '@angular/core';
import { MisPedidosservice } from './../_services/pedidos.services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
	selector: 'app-mis-pedidos',
	templateUrl: './mis-pedidos.component.html',
	styleUrls: ['./mis-pedidos.component.css']
})
export class MisPedidosComponent implements OnInit {
	 public iduser;

	constructor(private formBuilder: FormBuilder,
		private pedidos: MisPedidosservice,
		private router: Router) 
	{
		 this.iduser=localStorage.getItem('iduser');

	}

	ngOnInit() {

		this.misPedidos(this.iduser);
	}

	misPedidos(iduser){
		console.log("desde el componente");
		console.log(iduser);
		this.pedidos.getPedidos(iduser) 
		.subscribe(data=>{
		});
	}

}
