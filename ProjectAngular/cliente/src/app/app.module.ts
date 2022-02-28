import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookshopComponent } from './components/bookshop/bookshop.component';
import { ListaBookshopComponent } from './components/lista-bookshop/lista-bookshop.component';
import { RegistroBookshopComponent } from './components/registro-bookshop/registro-bookshop.component';
import { StoryMakerComponent } from './components/story-maker/story-maker.component';
import { BookStoreComponent } from './components/book-store/book-store.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    Page404Component,
    NavbarComponent,
    BookshopComponent,
    ListaBookshopComponent,
    RegistroBookshopComponent,
    StoryMakerComponent,
    BookStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
