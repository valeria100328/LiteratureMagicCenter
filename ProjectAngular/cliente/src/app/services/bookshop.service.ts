//Peticiones a la API y la consume por el http

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bookshop } from '../models/bookshop';


@Injectable({
  providedIn: 'root'
})
export class BookshopService {
  url_api = 'http://127.0.0.1:3001/api/bookshop';

  //Metodo constructor para saber si es el metodo put get o delete
  constructor(private http:HttpClient) { }
  //Va a obtener una respuesta en la que por medio de get va a obtener una respuesta
  getBookshops(): Observable<any>{
    return this.http.get(this.url_api);
  }
  //Aqui evidenciamos los parametros que necesitamos
  postBookshop(bookshop: Bookshop): Observable<any>{
    //Devolvemos una respuesta y damos la informacion
    //Post envia la informacion en la que debe tener dos parametros oligartorios, ya tenemos esa informacion
    return this.http.post(this.url_api, bookshop)
  }
  getBookshop(id: String): Observable<any>{
    //return this.http.get(this.url_api +id)
    return this.http.get(`${this.url_api}/${id}`)
    //consumiremos este metodo para el boton editar dandole un id y consulte para modificar
  }
  putBookshop(id: String, bookshop: Bookshop): Observable<any>{
    return this.http.put(`${this.url_api}/${id}`, bookshop)
  }
  deleteBookshopo(id: String): Observable<any>{
    return this.http.delete(`${this.url_api}/${id}`)
  }
}

