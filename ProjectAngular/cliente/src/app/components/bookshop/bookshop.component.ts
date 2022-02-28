import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookshop',
  templateUrl: './bookshop.component.html',
  styleUrls: ['./bookshop.component.css']
})
export class BookshopComponent implements OnInit {
  @Input() titulo_navbar: any;

  constructor() { }

  ngOnInit(): void {
    
  }


  }

