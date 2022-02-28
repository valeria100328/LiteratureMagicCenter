export class Bookshop{
    _id?: string;
    nombre_libro: string;
    categoria: string;
    autor: string;
    descripcion: string;
    cantidad_unidad: number;
    precio: number;

   

    constructor(nombreLibro: string, categoriaLibro: string, autorlibro: string, descripcionlibro:string, cantidadUnidadLibro: number, precioLibro:number)
    {

       this.nombre_libro = nombreLibro;
       this.categoria = categoriaLibro;
       this.autor = autorlibro;
       this.descripcion = descripcionlibro;
       this.cantidad_unidad = cantidadUnidadLibro;
       this.precio = precioLibro;
    }
}