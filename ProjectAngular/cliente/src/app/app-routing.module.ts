import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookshopComponent } from './components/bookshop/bookshop.component';
import { ListaBookshopComponent } from './components/lista-bookshop/lista-bookshop.component';
import { RegistroBookshopComponent } from './components/registro-bookshop/registro-bookshop.component';
import { StoryMakerComponent } from './components/story-maker/story-maker.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'ingreso', component: LoginComponent},
  {path: 'sistema', component: NavbarComponent},
  {path: 'bookshop', component: BookshopComponent},
  {path: 'lista-bookshop', component:ListaBookshopComponent},
  //Este es crear formulario
  {path: 'crear-formulario', component: RegistroBookshopComponent},
  //Este es editarlo
  {path: 'editar-formulario/:id', component: RegistroBookshopComponent},
  {path: 'crear-formulario/:id', component: RegistroBookshopComponent },
  {path: 'storyMaker', component:StoryMakerComponent, pathMatch: 'full'},
  {path:'404', component:Page404Component},
  {path: '**',redirectTo: '404',pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
