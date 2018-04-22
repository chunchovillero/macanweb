
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
	selector: 'app-pedido',
	templateUrl: './pedido.component.html',
	styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

	public iduser;

	public data: any[];
	public suc: any[];
	public filterQuery = "";
	public rowsOnPage = 5;
	public sortBy = "nombre_producto";
	public sortOrder = "asc";
	public idproducto:any;
	public cantidad_producto:any;
	public estado:any;

	constructor(private formBuilder: FormBuilder,
		private productos: Productosservice,
		private sucursales: Sucursalesservice,
		private pedidos: MisPedidosservice,
		private router: Router) 
	{
		this.iduser=localStorage.getItem('iduser');

	}

	producto:Producto={
		idproducto:"",
		cantidad_producto:"",
	};


	mipedido:Pedido={
		idusuario:"",
		sucursal:"",
		despacho:"1",
		observacion:"",
		productos: [],
	};

	ngOnInit() {
		this.mipedido.idusuario=this.iduser;
		console.log("iduser");
		console.log(this.iduser);

		this.Productos();
		this.Sucursales();
	}

	onChangeSucursal(id) {
		
		console.log(this.mipedido);
	}

	onKey(id){
		console.log(id);
		console.log("paso id");
		console.log(this.mipedido);
	}

	Productos(){
		this.productos.getProductos() 
		.subscribe(res=>{
			setTimeout(()=> {
				this.data = res;

				for (let prod of res) {
					this.idproducto=prod.idproducto;
					this.cantidad_producto=0;
					this.mipedido.productos.push({idproducto:this.idproducto, cantidad_producto:this.cantidad_producto});
				}

				console.log(this.mipedido);


			}, 2000);
		});
	}


	Sucursales(){
		this.sucursales.getSucursales() 
		.subscribe(data=>{
			this.suc = data;
			console.log(this.suc);
		});
	}

	despacho(tipo){
		console.log(tipo);
		this.mipedido.despacho=tipo;
		console.log(this.mipedido);
	}

	observacion(tipo){
		console.log(this.mipedido);
	}



	guardar(){

		this.pedidos.postPedidos( this.mipedido )
		.subscribe(data=>{

			this.estado = "Pedido Ingresado";
			console.log(this.estado);
		},
		error=>console.error(error));
	}

}
