export interface Misdatos{
  idusuario:number;
  nombres:string;
  apellidos:string;
  correo:string;
  telefono:string;
  celular:string;
}

export interface CambioContrasena{
  idusuario:number;
  antigua:string;
  nueva:string;
  renueva:string;
}
