export interface Producto{
  idproducto:any;
  cantidad_producto:any;
}


export interface Nuevopedidopaso2{
  marca:string;
  familia:string;
  subfamilia:string;
  subsubfamilia:string;
  cantidad:string;
  ancho:string;
  alto:string;
  area:string;
  observaciones:string;
  atributo:Producto[];
}
