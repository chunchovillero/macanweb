
import { Component, OnInit } from '@angular/core';
import { Productosservice } from './../_services/productos.services';
import { Sucursalesservice } from './../_services/sucursales.services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Pedido } from "./../_interfaces/pedido.interface";
import { Producto } from "./../_interfaces/pedido.interface";
import { MisPedidosservice } from './../_services/pedidos.services';

@Component({
	selector: 'app-paso2',
	templateUrl: './paso2.component.html',
	styleUrls: ['./paso2.component.css']
})
export class Paso2Component implements OnInit {

	public iduser;

	constructor(private formBuilder: FormBuilder,
		private productos: Productosservice,
		private sucursales: Sucursalesservice,
		private pedidos: MisPedidosservice,
		private router: Router) { 

		this.iduser=localStorage.getItem('iduser')
	}

	ngOnInit() {
	}

	pedido(){

	}

}
