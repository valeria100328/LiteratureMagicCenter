//Estructura base de datos
export class Usuario{
    _id?: number;
    usuario: string;
    password: string;
   

    constructor(validacionUsuario:string, passwordUsuario: string){
       this.usuario = validacionUsuario;
       this.password = passwordUsuario
    }
}