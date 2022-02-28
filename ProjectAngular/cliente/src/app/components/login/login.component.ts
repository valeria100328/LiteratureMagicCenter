import { Component, OnInit } from '@angular/core';
//Validar el formulario redactivo
import { FormGroup, FormBuilder, Validators } from '@angular/forms';;
import Swal from 'sweetalert2'
import { Usuario } from '../../models/login';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUsuariosForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginUsuariosForm =  this.fb.group({
      //usuario: ['',[Validators.required, Validators.email]],
      usuario: ['',[Validators.required]],
      password: ['', Validators.required]
    })
  }
//Nos ayuda a correr una instruccion cuando el componente sea cargado
  ngOnInit(): void {
    console.log("esta instruccion se ejecuta al cargar el componente")
  }
  accesoUsuario(){
    console.log(this.loginUsuariosForm);
    console.log(this.loginUsuariosForm.get('usuario')?.value);
   
//Nuestro JSON
    const data_usuario_form: Usuario = {
      usuario: this.loginUsuariosForm.get('usuario')?.value,
      password: this.loginUsuariosForm.get('password')?.value
    }
    this.router.navigate(['/']);
    
    Swal.fire({
      title: '¡Acceso permitido!!',
      text: 'Acuerdate que leer es el camino de la imaginación',
      imageUrl: 'https://4.bp.blogspot.com/-69TAWn3y5c0/Vcv6AqZr6jI/AAAAAAAAQdU/57ggaR2KTnE/s640/annyz.gif',
      icon: 'success',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
    console.log(data_usuario_form)
  }
  
}
