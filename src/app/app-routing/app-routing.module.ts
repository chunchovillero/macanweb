import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './../auth/login/login.component';
import { PruebaComponent } from './../prueba/prueba.component';
import { MisDatosComponent } from './../mis-datos/mis-datos.component';
import { MisPedidosComponent } from './../mis-pedidos/mis-pedidos.component';
import { SucursalesComponent } from './../sucursales/sucursales.component';
import { PedidoComponent } from './../pedido/pedido.component';
import { AuthGuard } from './../guards/auth.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
	  { path: 'mis-datos', component: MisDatosComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard], },
	  { path: 'mis-pedidos', component: MisPedidosComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard], },
    { path: 'sucursales', component: SucursalesComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard], },
    { path: 'pedido', component: PedidoComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard], },
    { path: '', redirectTo: 'admin', pathMatch: 'full' },
    { path: 'auth/login', component: LoginComponent },
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
