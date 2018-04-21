import { Component, OnInit } from '@angular/core';
import { Sucursalesservice } from './../_services/sucursales.services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {

	public iduser;

	constructor(private formBuilder: FormBuilder,
		private sucursales: Sucursalesservice,
		private router: Router) 
	{
		 this.iduser=localStorage.getItem('iduser');

	}

	ngOnInit() {

		this.Sucursales();
	}

	Sucursales(){
		this.sucursales.getSucursales() 
		.subscribe(data=>{
		});
	}

}
