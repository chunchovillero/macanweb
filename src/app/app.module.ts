import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {DataTableModule} from "angular2-datatable";

import { TokenInterceptor } from './interceptors/token.interceptor';
import { RefreshTokenInterceptor } from './interceptors/refresh-token.interceptor';
import { AplicationErrorHandle } from './app.error-handle';
import { AuthGuard } from './guards/auth.guard';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { MisDatosComponent } from './mis-datos/mis-datos.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MisPedidosComponent } from './mis-pedidos/mis-pedidos.component';

import { MisPedidosservice } from './_services/pedidos.services';
import { Sucursalesservice } from './_services/sucursales.services';
import { Productosservice } from './_services/productos.services';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { PedidoComponent } from './pedido/pedido.component';
import { Paso2Component } from './paso2/paso2.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    MisDatosComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    MisPedidosComponent,
    SucursalesComponent,
    PedidoComponent,
    Paso2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AdminModule,
    FormsModule,
    HttpModule,
    DataTableModule,
  ],
  providers: [
    AuthGuard,
    MisPedidosservice,
    Sucursalesservice,
    Productosservice,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true },
    {provide: ErrorHandler, useClass: AplicationErrorHandle }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
