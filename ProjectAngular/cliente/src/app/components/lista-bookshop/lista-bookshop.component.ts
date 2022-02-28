import { Component, Input, OnInit } from '@angular/core';
import { BookshopService } from '../../services/bookshop.service';
import { Bookshop } from '../../models/bookshop';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-bookshop',
  templateUrl: './lista-bookshop.component.html',
  styleUrls: ['./lista-bookshop.component.css']
})
export class ListaBookshopComponent implements OnInit {
  listaBookshop: Bookshop[] = []
  @Input() titulo_navbar: any;

  constructor(private _bookshopService: BookshopService) { }

  ngOnInit(): void {
    this.obtenerBookshop();
  }
  //Metodo para consumir el servicio
  obtenerBookshop(){
    //Necesita de dos parametros
    this. _bookshopService.getBookshops().subscribe(data => {
      console.log(data)
      //pintar info
      this.listaBookshop = data
    }, error => {
      console.log(error)
    })
  }

  venderBookshop(id: any) {
    Swal.fire({
      title: 'Desea comprar el libro seleccionado',
      text: "Su compra estara haciendo el proceso de envio al hacer click en comprar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, comprar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._bookshopService.deleteBookshopo(id).subscribe(data => {
          Swal.fire({
            title: 'Su envio se esta preparando para la entrega',
            text: 'Gracias por comprar nuestro libro',
            width: 500,
            padding: '3em',
            color: '#716add',
            background: '#fff url(assets/img/trees.png)',
            backdrop: `
            rgba(0,0,124,0.6)
            url("assets/img/cute-kawaii.gif")
            left top
            no-repeat
            `
        })
        this.obtenerBookshop()
      }, error => {
        console.log(error)
    })
}
    })
  }
}
