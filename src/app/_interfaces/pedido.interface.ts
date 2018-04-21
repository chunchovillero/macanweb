export interface Producto{
	idproducto:any;
	cantidad_producto:any;
}


export interface Pedido{
	idusuario:string;
	sucursal:string;
	despacho:string;
	observacion:string;
	productos:Producto[];
}
