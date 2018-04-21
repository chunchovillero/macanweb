export interface Producto{
  idproducto:any;
  cantidad_producto:any;
}


export interface Pedido{
  sucursal:string;
  despacho:string;
  observacion:string;
  productos:Producto[];
}
