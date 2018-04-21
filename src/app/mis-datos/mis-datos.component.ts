import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './../models/user';
import { Misdatos } from "./../_interfaces/misdatos.interface"
import { CambioContrasena } from "./../_interfaces/misdatos.interface"

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.css']
})
export class MisDatosComponent implements OnInit {

  f: FormGroup;
  public user:User;
  public status;
  public status2;
  public iduser;

  constructor(private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router) 
    {
  		this.user = new User(0,'','','','','');
      this.iduser=this.auth.getUser().idusuario;
    }



    misdatos:Misdatos={
      idusuario:0,
      nombres:"",
      apellidos:"",
      correo:"",
      telefono:"",
      celular:"",
    };

    cambiocontrasena:CambioContrasena={
      idusuario:0,
      antigua:"",
      nueva:"",
      renueva:"",
    };

  ngOnInit() {
    this.auth.misDatos(this.iduser)
    .subscribe(data=>{
      this.misdatos.idusuario=this.auth.getUser().idusuario;
      this.misdatos.nombres=data.nombres;
      this.misdatos.apellidos=data.apellidos;
      this.misdatos.correo=data.correo;
      this.misdatos.telefono=data.telefono;
      this.misdatos.celular=data.celular;
    });
   }

  onSubmit() {
    this.auth.actualizarDatos(this.misdatos)
    .subscribe(data=>{

      this.status = "cambiado";
      console.log(this.status);
       },
    error=>console.error(error));
  }

  misDatos(){
    this.auth.misDatos(this.iduser)
    .subscribe(data=>{
      this.misdatos.nombres=data.nombres;
      this.misdatos.apellidos=data.apellidos;
      this.misdatos.correo=data.correo;
      this.misdatos.telefono=data.telefono;
      this.misdatos.celular=data.celular;
    });
  }

  actualizarContrasena(){
    this.cambiocontrasena.idusuario=this.auth.getUser().idusuario;
    this.auth.actualizarContrasena( this.cambiocontrasena )
    .subscribe(data=>{
      this.status2 = "cambiado";
      //this._router.navigate([`/nuevo-pedido-paso2/${data.pedido.idpedido}`])
    },
    error=>console.error(error));
  }

}
