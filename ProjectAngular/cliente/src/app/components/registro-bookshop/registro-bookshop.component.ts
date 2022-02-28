import { Input,Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Bookshop } from 'src/app/models/bookshop';
import { BookshopService } from '../../services/bookshop.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro-bookshop',
  templateUrl: './registro-bookshop.component.html',
  styleUrls: ['./registro-bookshop.component.css']
})
export class RegistroBookshopComponent implements OnInit {
  //Dinamica de que cambien el titulo
  @Input() titulo_navbar: any;
registroBookshopForm: FormGroup;
//Creamos nuestro atributo
soloNumeros = /^([0-9])*$/;
//Guarda el identificador de la url
idDatBookshop: string| null


  constructor(private fb: FormBuilder,private _bookshopSerivice: BookshopService,private router: Router, private idBookshopPath: ActivatedRoute) {
    this.registroBookshopForm = this.fb.group({
      nombre_libro: ['',Validators.required],
      categoria: ['',Validators.required],
      autor:['',Validators.required],
      descripcion: ['',Validators.required],
      cantidad_unidad: ['', Validators.pattern(this.soloNumeros)],
      precio: ['0', [Validators.required, Validators.pattern(this.soloNumeros), Validators.min(1)]],
    });
     //snapshor acceda a la url
     this.idDatBookshop = this.idBookshopPath.snapshot.paramMap.get('id')
    
}

  ngOnInit(): void {
    this.accionRequerida()
  }


//capturamos la informacion
   InfoRegistro() {
    console.log(this.registroBookshopForm)


    //el data recibe nuestra api y trabajarla en la que es un JSON
    const  data_producto: Bookshop ={
      nombre_libro: this.registroBookshopForm.get('nombre_libro')?.value,
      categoria: this.registroBookshopForm.get('categoria')?.value,
      autor: this.registroBookshopForm.get('autor')?.value,
      descripcion: this.registroBookshopForm.get('descripcion')?.value,
      cantidad_unidad: this.registroBookshopForm.get('cantidad_unidad')?.value,
      precio: this.registroBookshopForm.get('precio')?.value
    }

    if(this.idDatBookshop !== null){
      //Actualizar
      this._bookshopSerivice.putBookshop(this.idDatBookshop, data_producto).subscribe(data => {
        this.router.navigate(['/lista-bookshop']);
        Swal.fire({
          icon: 'success',
          title: 'Cambio reguistrado exitosamente del libro',
        })

      }, error => {
        console.log(error)
      })
    }else{
      this._bookshopSerivice.postBookshop(data_producto).subscribe (data => {
        this.router.navigate(['/lista-bookshop']);
        Swal.fire({
          icon: 'success',
          title: 'Se agredo exitosamente una nuevo libro de la temporada actual',
        })
      }, 
        error => {
          console.log(error)
        })

    }
    
    console.log(data_producto)
  }
  accionRequerida(){
    if(this.idDatBookshop !== null){
      //Alimenta el formulario con la base de datos
      this._bookshopSerivice.getBookshop(this.idDatBookshop).subscribe(data => {
        //tenemos que llamar para alimentar el usuario
        this.registroBookshopForm.setValue({
          nombre_libro: data. nombre_libro,
          categoria: data.categoria,
          autor: data.autor,
          descripcion: data.descripcion,
          cantidad_unidad: data.cantidad_unidad,
          precio: data.precio
        })
      }, error => {

      })
      //devolvera la respuesta

    }

  }

}
